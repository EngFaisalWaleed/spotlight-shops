import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Linking from "expo-linking";

import * as navigators from "../constants/navigators";
import About from "../screens/About/About";
import ContactUs from "../screens/ContactUs/ContactUs";
import Home from "../screens/Home/Home";

const Tab = createBottomTabNavigator();

const prefix = Linking.createURL("/");

const Navigation = () => {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator>
        <Tab.Screen name={navigators.HOME_SCREEN} component={Home} />
        <Tab.Screen name={navigators.ABOUT_SCREEN} component={About} />
        <Tab.Screen name={navigators.CONTACT_US_SCREEN} component={ContactUs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
