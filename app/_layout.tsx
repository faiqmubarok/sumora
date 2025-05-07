import Colors from "@/constants/colors";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import "./global.css";

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
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.WHITE,
        }}
      >
        <Text>Loading Screen</Text>
      </View>
    );
  }

  return (
    <TanstackProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </TanstackProvider>
  );
}
