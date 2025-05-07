import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("@/assets/images/logo-2.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Sumora</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
    marginBottom: 12,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontFamily: "DMSans-SemiBold",
    color: "#4D4D4D",
    textAlign: "center",
  },
});
