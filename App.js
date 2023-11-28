import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SingupScreen from "./screens/SignupScreen";
import QUizScreen from "./screens/QuizScreen";
import OrderScreen from "./screens/OrderScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignupScreen'
          component={SingupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='QuizScreen'
          component={QUizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='OrderScreen'
          component={OrderScreen}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
