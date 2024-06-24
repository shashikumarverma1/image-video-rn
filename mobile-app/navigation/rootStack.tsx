import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard, Login, Signup } from "../screens";
import { Profile } from "../screens/profile";
import ShowImage from "../screens/ShowImage";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="ShowImage" component={ShowImage} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
export default RootStack;
