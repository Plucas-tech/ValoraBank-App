import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/Pages/Login";
import Registrar from "./src/Pages/Registrar";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
         name="Login"
         component={Login}
         options={{ headerShown: false}}
        />

        <Stack.Screen
         name="Registrar"
         component={Registrar}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}