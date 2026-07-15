import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home , Search, CirclePlus, CalendarArrowDown, User} from 'lucide-react-native'
import DashboardScreen from '../screens/seller/DashboardScreen';
import AuctionScreen from '../screens/seller/AuctionScreen';
import OrderScreen from '../screens/seller/OrderScreen';
import MoreScreen from '../screens/seller/MoreScreen';
import AddScreen from '../screens/seller/AddScreen';

const Tab = createBottomTabNavigator();

export default function SellerBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
        },
       
      
      })}
    >
       <Tab.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
          <Tab.Screen 
          name="Auctions" 
          component={AuctionScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
          }}
        />
         <Tab.Screen 
          name="Add" 
          component={AddScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <CirclePlus color={color} size={size} />,
          }}
        />
          <Tab.Screen 
          name="Orders" 
          component={OrderScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <CalendarArrowDown color={color} size={size} />,
          }}
        />
          <Tab.Screen 
          name="More" 
          component={MoreScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
       
      
    </Tab.Navigator>
  );
}