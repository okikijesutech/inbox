import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <StatusBar style={"auto"} />
          <Text style={styles.header}>Login</Text>
          <TextInput
            style={styles.textinput}
            placeholder='Enter Email'
            defaultValue={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
          <TextInput
            style={styles.textinput}
            placeholder='Enter password'
            defaultValue={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
          />
          <Button
            title='Log in'
            color={"blue"}
            onPress={() => navigation.navigate("QuizScreen")}
          />
          <Text>Don't have an account </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  header: {
    marginBottom: 35,
    textAlign: "center",
    fontSize: 24,
  },
  textinput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginBottom: 30,
  },
});
export default LoginScreen;
