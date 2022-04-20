import { Stack, Text } from "@mantine/core";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Text
        component="h1"
        align="center"
        variant="gradient"
        gradient={{ from: "pink", to: "grape", deg: 90 }}
        weight={700}
        sx={() => ({
          fontSize: "48px",
        })}
      >
        Welcome to Ultimate Form Examples!
      </Text>

      <Text
        size="xl"
        component="h2"
        align="center"
        variant="gradient"
        gradient={{ from: "grape", to: "pink", deg: 90 }}
        weight={700}
      >
        Get started picking a example
      </Text>
    </Stack>
  );
};

export default Home;
