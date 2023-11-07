import { StyleSheet, Text, View } from "react-native";
import BalloonAnimation from "./components/Balloon";
import UserForm from "./components/UserForm";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Balloon Inflation " component={BalloonAnimation} />
        <Stack.Screen name="UserForm" component={UserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
