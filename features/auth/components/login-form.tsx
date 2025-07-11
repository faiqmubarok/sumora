import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Input from "@/components/input";
import Button from "@/components/button";
import Colors from "@/constants/colors";
import Link from "@/components/link";
import Checkbox from "@/components/checkbox";
import { LoginFormSchema } from "../form/form";

interface LoginFormProps {
  onSubmit: (data: LoginFormSchema) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useFormContext<LoginFormSchema>();

  return (
    <>
      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            {...field}
            label="Email"
            value={field.value}
            onChangeText={field.onChange}
            keyboardType="email-address"
            placeholder="Enter your email"
            autoCapitalize="none"
            error={errors.email?.message}
          />
        )}
      />

      {/* Password */}
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <View style={{ marginBottom: 4 }}>
              <Input
                label="Password"
                placeholder="Enter your password"
                isPassword
                {...field}
                value={field.value}
                onChangeText={field.onChange}
                error={errors.password?.message}
              />
            </View>
          )}
        />

        <View style={styles.passwordRow}>
          <Checkbox
            label="Remember me"
            checked={rememberMe}
            labelStyle={{ fontSize: 15 }}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <Link href={"/"}>Forgot Password?</Link>
        </View>
      </View>

      <Button onPress={handleSubmit(onSubmit)}>Sign in</Button>

      {/* Separator */}
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Sign in with Google */}
      <Button
        variant="outline"
        withIcon
        iconSource={require("@/assets/icons/google.png")}
      >
        Sign in with Google
      </Button>

      {/* Sign in with Apple */}
      <Button
        style={{ backgroundColor: Colors.BLACK }}
        withIcon
        iconSource={require("@/assets/icons/apple.png")}
      >
        Sign in with Apple
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  passwordRow: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.BORDER,
  },
  orText: {
    marginHorizontal: 16,
    color: "#A5A5A5",
    fontSize: 14,
    fontFamily: "DMSans-Medium",
  },
});
