import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import Colors from "@/constants/colors";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withIcon?: boolean;
  iconSource?: ImageSourcePropType;
  iconTag?: React.ReactNode;
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const variantStyles = {
  primary: {
    container: {
      backgroundColor: Colors.PRIMARY,
    },
    text: {
      color: Colors.WHITE,
    },
  },
  secondary: {
    container: {
      backgroundColor: Colors.SECONDARY,
    },
    text: {
      color: Colors.PRIMARY,
    },
  },
  outline: {
    container: {
      backgroundColor: "transparent",
      borderWidth: 1.5,
      borderColor: "#D4D4D4",
    },
    text: {
      color: Colors.BLACK,
    },
  },
} as const;

const sizeStyles = {
  small: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
} as const;

export default function Button({
  variant = "primary",
  size = "medium",
  withIcon = false,
  iconSource,
  iconTag,
  children,
  onPress,
  style,
  textStyle,
  isLoading = false,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <TouchableOpacity
      style={[
        styles.base,
        variantStyle.container,
        sizeStyle,
        fullWidth && { width: "100%" },
        (disabled || isLoading) && { opacity: 0.6 },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled || isLoading}
    >
      <View style={styles.content}>
        {isLoading ? (
          <ActivityIndicator size="small" color={variantStyle.text.color} />
        ) : (
          <>
            {withIcon && iconSource && (
              <Image
                source={iconSource}
                style={styles.icon}
                resizeMode="contain"
              />
            )}
            {withIcon && iconTag && iconTag}
            <Text style={[styles.text, variantStyle.text, textStyle]}>
              {children}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  text: {
    fontFamily: "DMSans-Medium",
    fontSize: 14,
  },
});
