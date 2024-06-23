import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dashboard, Login, Signup } from "../screens";
import { useNavigation } from "@react-navigation/native";
import RootStack from "./rootStack";
import { Profile } from "../screens/profile";
const Tab = createBottomTabNavigator();
function BottomTabs() {
  const navigation =useNavigation()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        initialRouteName: "Home",
        tabBarStyle: { backgroundColor: "#fff" },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Back") {
            iconName = focused ? "arrow-back" : "arrow-back-outline";
          } else if (route.name === "Connect") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Menu") {
            iconName = focused ? "menu" : "menu-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle-outline" : "person-circle";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#272735",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={RootStack} />
      <Tab.Screen
        name="Menu"
        component={Dashboard}
      listeners={() => ({
          tabPress: (e) => {
       e.preventDefault();
            navigation.openDrawer();
        },
       })
   }
      />
   
        <Tab.Screen
        name="Profile"
        component={Profile}
      />
         <Tab.Screen
        name="Back"
        component={RootStack}
       
      />
    
    </Tab.Navigator>
  );
}
export default BottomTabs;