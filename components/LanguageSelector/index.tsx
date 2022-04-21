import { ActionIcon, Menu } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./style.module.scss";

type localesEnum = "en-US" | "pt-BR";

const LanguageSelector = () => {
  const { locale, asPath, push } = useRouter();

  const languageIcons = {
    "en-US": <Image alt="en-US" src="/flags/US.svg" width={25} height={25} />,
    "pt-BR": <Image alt="pt-BR" src="/flags/BR.svg" width={25} height={25} />,
  };

  return (
    <Menu
      control={<ActionIcon>{languageIcons[locale as localesEnum]}</ActionIcon>}
      classNames={{
        itemIcon: styles.icon,
      }}
      menuButtonLabel="Language selector"
    >
      <Menu.Label>
        <FormattedMessage defaultMessage="Languages" />
      </Menu.Label>

      <Menu.Item
        icon={languageIcons["en-US"]}
        onClick={() => {
          push(asPath, asPath, {
            locale: "en-US",
          });
        }}
      >
        English
      </Menu.Item>

      <Menu.Item
        icon={languageIcons["pt-BR"]}
        onClick={() => {
          push(asPath, asPath, {
            locale: "pt-BR",
          });
        }}
      >
        Português
      </Menu.Item>
    </Menu>
  );
};

export default LanguageSelector;
