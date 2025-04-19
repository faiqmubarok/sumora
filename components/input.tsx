import React, { useState, forwardRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Label from "./label";
import Colors from "@/constants/colors";

interface InputProps extends TextInputProps {
  label?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  iconColor?: string;
  error?: string;
  isPassword?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
}

// Gunakan forwardRef di sini
const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      icon,
      containerStyle,
      inputStyle,
      iconColor = "#999",
      error,
      isPassword = false,
      secureTextEntry,
      onChangeText,
      value,
      ...props
    }: InputProps,
    ref // Menerima ref sebagai parameter
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isSecure = isPassword && !showPassword;

    return (
      <View style={[styles.wrapper, containerStyle]}>
        {label && <Label style={{ marginBottom: 12 }}>{label}</Label>}

        <View
          style={[
            styles.inputContainer,
            error && { borderColor: Colors.DESTRUCTIVE },
          ]}
        >
          {/* Icon kiri */}
          {icon && (
            <Ionicons
              name={icon}
              size={20}
              color={iconColor}
              style={styles.iconLeft}
            />
          )}

          {/* Input */}
          <TextInput
            ref={ref} // Meneruskan ref ke TextInput
            value={value}
            onChangeText={onChangeText}
            style={[
              styles.input,
              icon && { paddingLeft: 8 },
              isPassword && { paddingRight: 36 },
              inputStyle,
            ]}
            placeholderTextColor="#aaa"
            secureTextEntry={isSecure}
            {...props}
          />

          {/* Icon password toggle */}
          {isPassword && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          )}
        </View>

        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 0,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  input: {
    fontFamily: "DMSans-Regular",
    flex: 1,
    fontSize: 14,
    color: Colors.BLACK,
  },
  iconLeft: {
    marginRight: 8,
  },
  error: {
    fontFamily: "DMSans-Regular",
    color: Colors.DESTRUCTIVE,
    fontSize: 14,
    marginTop: 8,
  },
});

export default Input; // Ekspor komponen Input
