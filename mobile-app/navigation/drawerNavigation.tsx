import { useContext } from "react";
import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from "../components/customSideBarMenu";
import {  Login, Signup } from "../screens";
import BottomTabs from "./bottomNavigation";

import { GlobalInfo } from "../context/userDetails";

const Drawer = createDrawerNavigator();
function DraweNavigation() {
  const {userDetails, setUserDetails } = useContext(GlobalInfo)
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      {userDetails ? (
        <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      ) : (
        <Drawer.Screen name="Login" component={Login} />
      )}
  
   <Drawer.Screen name="Signup" component={Signup} />
  
    </Drawer.Navigator>
  );
}

export default DraweNavigation;
