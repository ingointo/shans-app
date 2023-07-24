import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../components/screens/Home";
import ProfileScreen from "../components/screens/Profile";
import CategoriesScreen from "../components/screens/Categories";
import MyOrdersScreen from "../components/screens/Myorders";
import DashScreen from "../components/screens/Dashboard";

const Tab = createBottomTabNavigator();

export default function BottomDrawer() {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#232323' }, // Set the background color to black
          activeTintColor: 'white', // Set the active tab text color to white
          inactiveTintColor: 'gray', // Set the inactive tab text color to gray
          borderTopLeftRadius: 30, // Set the top-left border radius
          borderTopRightRadius: 30, // Set the top-right border radius
          
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown:false,}}/>
        <Tab.Screen name="Categories" component={CategoriesScreen} options={{headerShown:false,}}/>
        <Tab.Screen name="Dash" component={DashScreen} options={{headerShown:false,}}/>
        <Tab.Screen name="MyOrders" component={MyOrdersScreen} options={{headerShown:false,}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false,}}/>
      
      </Tab.Navigator>

  );
}
