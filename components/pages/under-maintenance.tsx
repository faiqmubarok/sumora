import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../button";

const UnderMaintenancePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/maintenance-illustration.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>We're Under Maintenance</Text>
      <Text style={styles.subtitle}>
        Sorry for the inconvenience. We’re currently working on something
        awesome. Please check back later.
      </Text>
      <Button onPress={() => navigation.goBack()}>Back to Home</Button>
    </View>
  );
};

export default UnderMaintenancePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
