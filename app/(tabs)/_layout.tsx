import { Tabs } from "expo-router";
import TabBar from "@/components/tab-bar";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            borderTopWidth: 0,
            position: "absolute",
          },
        }}
        tabBar={(props) => <TabBar {...props} />}
      />
    </>
  );
}
