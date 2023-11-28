import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const SingupScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <StatusBar style={"auto"} />
          <Text style={styles.header}>Sign Up</Text>
          <TextInput
            style={styles.textinput}
            placeholder='Enter User name'
            defaultValue={name}
            onChangeText={(newName) => setName(newName)}
          />
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
          <Button title='Log in' color={"blue"} />
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
export default SingupScreen;
