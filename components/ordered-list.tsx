import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

interface OrderedListProps {
  data: string[];
}

const OrderedList: React.FC<OrderedListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bullet: {
    fontWeight: "bold",
    marginRight: 8,
    color: "#4d4d4d",
  },
  text: {
    fontSize: 14,
    fontFamily: "DMSans-Regular",
    color: "#4D4D4D",
    lineHeight: 24,
    flex: 1,
  },
});

export default OrderedList;
