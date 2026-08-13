import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Gavel,
  CirclePlus,
  CalendarArrowDown,
  User,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DashboardScreen from '../screens/seller/DashboardScreen';
import AuctionScreen from '../screens/seller/AuctionScreen';
import OrderScreen from '../screens/seller/OrderScreen';
import MoreScreen from '../screens/seller/MoreScreen';
import AddProductScreen from '../screens/seller/AddProductScreen';
import utils from '../utils'; 

const Tab = createBottomTabNavigator();

export default function SellerBottomTabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: utils.colors.theme_color,
        tabBarInactiveTintColor: utils.colors.grey,
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 6,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Auctions"
        component={AuctionScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Gavel color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{
          title: 'Add',
          tabBarIcon: ({ color, size }) => (
            <CirclePlus color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CalendarArrowDown color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}