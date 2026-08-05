import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Gavel,
  Search,
  Heart,
  User,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BuyerHomeScreen from '../screens/buyer/BuyerHomeScreen';
import SearchScreen from '../screens/buyer/SearchScreen';
import WatchListScreen from '../screens/buyer/WatchListScreen';
import MybidsScreen from '../screens/buyer/MybidsScreen';
import ProfileScreen from '../screens/buyer/ProfileScreen';
import utils from '../utils'; 

const Tab = createBottomTabNavigator();

export default function BuyerNavigator() {
      const insets = useSafeAreaInsets();
    return(
      <Tab.Navigator
            initialRouteName="Home"
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
              name="Home"
              component={BuyerHomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Home color={color} size={size} />
                ),
              }}
            />
      
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Search color={color} size={size} />
                ),
              }}
            />
           
            <Tab.Screen
             name="Watchlist"
             component={WatchListScreen}
             options={{
                tabBarIcon: ({ color, size }) => (
                    <Heart color={color} size={size} />
                ),
             }}
             />

            <Tab.Screen
              name="Mybids"
              component={MybidsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Gavel color={color} size={size} />
                ),
              }}
            />
      
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <User color={color} size={size} />
                ),
              }}
            />
      
          </Tab.Navigator>
        );
      }