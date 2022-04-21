import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import AppMenu from "@/components/AppMenu";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { useRouter } from "next/router";
import { useMemo } from "react";
import English from "@/content/locales/en.json";
import Portuguese from "@/content/locales/pt.json";
import { IntlProvider } from "react-intl";
import "../styles/global.scss";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const { locale, locales, asPath } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "pt":
        return Portuguese;
      case "en":
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <>
      <Head>
        <title>Ultimate Form</title>
        <meta name="author" content="Yuri Becker" />
        <meta
          name="description"
          content="Accessible form examples using React-hook-form and Mantine"
        />
        <meta name="keywords" content="form, accessible, examples" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="rating" content="general" />

        {process.env.NODE_ENV === "production" &&
          locales?.map((locale) => {
            return (
              <link
                key={locale}
                rel="alternate"
                hrefLang={locale}
                href={`${process.env.VERCEL_URL}/${locale}${asPath}`}
              />
            );
          })}
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          primaryColor: "pink",
        }}
        defaultProps={{
          TextInput: { mb: "md" },
          PasswordInput: { mb: "md" },
          Switch: { mb: "md" },
          NativeSelect: { mb: "md" },
        }}
      >
        <ModalsProvider>
          <NotificationsProvider>
            <IntlProvider
              locale={shortLocale}
              defaultLocale="en"
              messages={messages}
              onError={() => null}
            >
              <AppMenu>
                <Component {...pageProps} />
              </AppMenu>
            </IntlProvider>
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
