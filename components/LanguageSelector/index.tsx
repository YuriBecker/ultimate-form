import { ActionIcon, Menu, Tooltip } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "./style.module.scss";

type localesEnum = "en-US" | "pt-BR";

const LanguageSelector = () => {
  const { locale, asPath, push } = useRouter();
  const [opened, setOpened] = useState(true);

  const tooltipLabel = useIntl().formatMessage({
    defaultMessage: "Change the language here",
  });

  useEffect(() => {
    setTimeout(() => {
      setOpened(false);
    }, 2000);
  }, []);

  const languageIcons = {
    "en-US": (
      <Image alt="en-US" src="/flags/US.svg" width={25} height={25} priority />
    ),
    "pt-BR": (
      <Image alt="pt-BR" src="/flags/BR.svg" width={25} height={25} priority />
    ),
  };

  return (
    <Tooltip
      opened={opened}
      label={tooltipLabel}
      position="bottom"
      placement="end"
      withArrow
    >
      <Menu
        control={
          <ActionIcon>{languageIcons[locale as localesEnum]}</ActionIcon>
        }
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
    </Tooltip>
  );
};

export default LanguageSelector;
