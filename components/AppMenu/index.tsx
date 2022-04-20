import {
  AppShell,
  Burger,
  Button,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";

export default function AppMenu({ children }: { children: ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const router = useRouter();

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          fixed
          position={{ top: 0, left: 0 }}
        >
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            <Link href="/login" passHref>
              <Button
                variant={router.pathname === "/login" ? "filled" : "light"}
                fullWidth
                mb={"md"}
                onClick={() => setOpened(false)}
              >
                Login
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button
                variant={router.pathname === "/signup" ? "filled" : "light"}
                fullWidth
                mb={"md"}
                onClick={() => setOpened(false)}
              >
                Signup
              </Button>
            </Link>
            <Link href="/address" passHref>
              <Button
                variant={router.pathname === "/address" ? "filled" : "light"}
                fullWidth
                mb={"md"}
                onClick={() => setOpened(false)}
              >
                Address
              </Button>
            </Link>
            <Link href="/payment" passHref>
              <Button
                variant={router.pathname === "/payment" ? "filled" : "light"}
                fullWidth
                mb={"md"}
                onClick={() => setOpened(false)}
              >
                Payment
              </Button>
            </Link>
            <Link href="/file-upload" passHref>
              <Button
                variant={
                  router.pathname === "/file-upload" ? "filled" : "light"
                }
                fullWidth
                mb={"md"}
                onClick={() => setOpened(false)}
              >
                File Upload
              </Button>
            </Link>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={50} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Link href="/" passHref>
              <Button variant="subtle">Ultimate Form Examples</Button>
            </Link>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
