import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import AppMenu from "@/components/AppMenu";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Ultimate Form</title>
        <meta name="author" content="Yuri Becker" />
        <meta
          name="description"
          content="Accessible form examples using React-hook-form and Mantine"
        />
        <meta name="keywords" content="Form examples, Accessible" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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
            <AppMenu>
              <Component {...pageProps} />
            </AppMenu>
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
