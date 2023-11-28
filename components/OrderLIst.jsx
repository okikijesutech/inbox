import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const OrderList = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>{item.title}</Text>
      <Image source={item.img} style={styles.image} />
      <Pressable style={styles.button}>
        <Text style={{ fontSize: 20 }}>Order</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    height: 400,
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    marginVertical: 15,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    marginTop: 15,
    alignItems: "center",
  },
});
export default OrderList;
