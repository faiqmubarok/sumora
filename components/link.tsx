import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useRouter, LinkProps as ExpoLinkProps } from "expo-router";
import React from "react";
import Colors from "@/constants/colors";

interface LinkProps {
  href: ExpoLinkProps["href"];
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Link({
  href,
  children,
  style,
  containerStyle,
}: LinkProps) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(href)} style={containerStyle}>
      <Text style={[styles.text, style]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.PRIMARY,
    fontFamily: "DMSans-Medium",
    fontSize: 12,
    // textDecorationLine: "underline",
  },
});
