import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import OrderList from "../components/OrderLIst";
import vegey from "../assets/vegey.jpg";

const DATA = [
  {
    id: "0",
    title: "Vege",
    img: vegey,
  },
  {
    id: "1",
    title: "Pro",
    img: vegey,
  },
  {
    id: "2",
    title: "Pelo",
    img: vegey,
  },
  {
    id: "3",
    title: "Carbs",
    img: vegey,
  },
];

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 45 }}>
        Pick your poision
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <OrderList item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 16,
  },
});
export default OrderScreen;
