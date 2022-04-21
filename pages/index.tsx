import { Stack, Text } from "@mantine/core";
import type { NextPage } from "next";
import { FormattedMessage } from "react-intl";

const Home: NextPage = () => {
  return (
    <Stack>
      <Text
        component="h1"
        align="center"
        variant="gradient"
        gradient={{ from: "pink", to: "grape", deg: 90 }}
        weight={700}
        sx={(theme) => ({
          fontSize: "48px",
          marginBottom: theme.spacing.sm,
        })}
      >
        <FormattedMessage defaultMessage="Welcome to Ultimate Form Examples!" />
      </Text>

      <Text
        size="xl"
        component="h2"
        align="center"
        variant="gradient"
        gradient={{ from: "grape", to: "pink", deg: 90 }}
        weight={700}
      >
        <FormattedMessage defaultMessage="Get started picking a example" />
      </Text>
    </Stack>
  );
};

export default Home;
