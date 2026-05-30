import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/Pages/Login";
import Registrar from "./src/Pages/Registrar";
import ForgotPassword from "./src/Pages/ForgotPassword"
import Home from "./src/Pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{ headerStyle:{backgroundColor: '#00c6ff'}, headerTintColor: '#fff'}}>

        <Stack.Screen
         name="Login"
         component={Login}
         options={{ headerShown: false }}
        />

        <Stack.Screen
         name="Registrar"
         component={Registrar}
        />

        <Stack.Screen
         name="ForgotPassword"
         component={ForgotPassword}
         options={{title:'Alterar senha'}}
        />

        <Stack.Screen
         name="Home"
         component={Home}
         options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}