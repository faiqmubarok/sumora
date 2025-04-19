import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Dimensions, Pressable, Text, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import colors from "@/constants/colors";

const icons: Record<string, React.ReactElement> = {
  home: <Ionicons name="home-outline" size={28} />,
  pulse: <Ionicons name="water-outline" size={28} />,
  report: <Feather name="file-text" size={28} />,
  profile: <Ionicons name="person-outline" size={28} />,
};

const { width } = Dimensions.get("window");

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#1F1F1F",
        borderRadius: 999,
        marginVertical: 28,
        marginHorizontal: width * 0.12,
        padding: 4,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : typeof options.title === "string"
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={{
              backgroundColor: isFocused ? "#fff" : "transparent",
              paddingVertical: isFocused ? 12 : 0,
              paddingLeft: isFocused ? 12 : 10,
              paddingRight: isFocused ? 16 : 10,
              borderRadius: 999,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              flexShrink: 1,
            }}
          >
            <View style={{ opacity: isFocused ? 1 : 0.8 }}>
              {React.cloneElement(icons[route.name.toLowerCase()], {
                color: isFocused ? colors.BLACK : "#fff",
              })}
            </View>

            {isFocused && (
              <Text
                style={{
                  color: colors.BLACK,
                  fontFamily: "DMSans-Medium",
                  textTransform: "capitalize",
                }}
              >
                {label}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;
