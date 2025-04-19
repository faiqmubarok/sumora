import { Tabs } from "expo-router";
import TabBar from "@/components/tab-bar";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      />
    </>
  );
}
