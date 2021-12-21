import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CluesNavigator from "./src/navigators/Clues/CluesNavigator";

const AppNavigator = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator>
        <CluesNavigator />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}
