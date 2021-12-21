import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CluesScreen from "./screens/CluesScreen";

const Stack = createNativeStackNavigator();

export default function CluesNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName='Clues'>
      <Stack.Screen name='Clues' component={CluesScreen} />
    </Stack.Navigator>
  );
}
