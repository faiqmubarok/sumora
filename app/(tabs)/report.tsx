import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UnderMaintenancePage from "@/components/pages/under-maintenance";
import { StatusBar } from "expo-status-bar";

export default function Report() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1 }}>
        <UnderMaintenancePage />
      </SafeAreaView>
    </>
  );
}
