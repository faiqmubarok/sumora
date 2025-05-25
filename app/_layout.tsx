import { TanstackProvider } from "@/providers/tanstack-provider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "./global.css";
import LoadingScreen from "@/components/loading-screen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "DMSans-Light": require("@/assets/fonts/DMSans-Light.ttf"),
    "DMSans-Regular": require("@/assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("@/assets/fonts/DMSans-Medium.ttf"),
    "DMSans-SemiBold": require("@/assets/fonts/DMSans-SemiBold.ttf"),
    "DMSans-Bold": require("@/assets/fonts/DMSans-Bold.ttf"),
  });

  const [appReady, setAppReady] = useState<boolean>(false);

  useEffect(() => {
    if (fontsLoaded) {
      const timeout = setTimeout(() => {
        setAppReady(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [fontsLoaded]);

  if (!appReady) {
    return <LoadingScreen />;
  }

  return (
    <TanstackProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="light" />
    </TanstackProvider>
  );
}
