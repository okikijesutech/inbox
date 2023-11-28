import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import rice from "../assets/rice.jpeg";
import beans from "../assets/beans.jpg";
import yam from "../assets/yam.jpeg";

const QUizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const navigation = useNavigation();

  const handlePress = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Let us known whats on you tongues pallet</Text>
      <View>
        {currentQuestion === 1 ? (
          <View style={styles.question}>
            <View style={styles.buttonContainer}>
              <Pressable
                style={({ pressed }) => [
                  styles.pressableButton,
                  {
                    backgroundColor: pressed ? "lightblue" : "blue",
                  },
                ]}
                onPress={() => setCurrentQuestion(currentQuestion + 1)}
              >
                <Text style={styles.buttonText}>Next</Text>
              </Pressable>
            </View>
            <Text>Rice</Text>
            <Image source={rice} style={{ width: 200, height: 200 }} />
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.buttons} onPress={handlePress}>
                <Text>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons} onPress={handlePress}>
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : currentQuestion === 2 ? (
          <View style={styles.question}>
            <View style={styles.buttonContainer}>
              <Pressable
                style={({ pressed }) => [
                  styles.pressableButton,
                  {
                    backgroundColor: pressed ? "lightblue" : "blue",
                  },
                ]}
                onPress={() => setCurrentQuestion(currentQuestion - 1)}
              >
                <Text style={styles.buttonText}>Prev</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.pressableButton,
                  {
                    backgroundColor: pressed ? "lightblue" : "blue",
                  },
                ]}
                onPress={() => setCurrentQuestion(currentQuestion + 1)}
              >
                <Text style={styles.buttonText}>Next</Text>
              </Pressable>
            </View>
            <Text>Beans</Text>
            <Image source={beans} style={{ width: 200, height: 200 }} />
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.buttons} onPress={handlePress}>
                <Text>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons} onPress={handlePress}>
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : currentQuestion === 3 ? (
          <View style={styles.question}>
            <View style={styles.buttonContainer}>
              <Pressable
                style={({ pressed }) => [
                  styles.pressableButton,
                  {
                    backgroundColor: pressed ? "lightblue" : "blue",
                  },
                ]}
                onPress={() => setCurrentQuestion(currentQuestion - 1)}
              >
                <Text style={styles.buttonText}>Prev</Text>
              </Pressable>
            </View>
            <Text>Yam</Text>
            <Image source={yam} style={{ width: 200, height: 200 }} />
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => navigation.navigate("OrderScreen")}
                style={styles.buttons}
              >
                <Text>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("OrderScreen")}
                style={styles.buttons}
              >
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          "Check the questionire"
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 16,
  },
  question: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  pressableButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 25,
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
export default QUizScreen;
