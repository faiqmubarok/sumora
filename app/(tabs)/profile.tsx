import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import UnderMaintenancePage from "@/components/pages/under-maintenance";

export default function Profile() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1 }}>
        <UnderMaintenancePage />
      </SafeAreaView>
    </>
  );
}
