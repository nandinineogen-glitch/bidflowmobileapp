import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home , Gavel, CirclePlus, CalendarArrowDown, User} from 'lucide-react-native'
import DashboardScreen from '../screens/seller/DashboardScreen';
import AuctionScreen from '../screens/seller/AuctionScreen';
import OrderScreen from '../screens/seller/OrderScreen';
import MoreScreen from '../screens/seller/MoreScreen';
import AddProductScreen from '../screens/seller/AddProductScreen';

const Tab = createBottomTabNavigator();

export default function SellerBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
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
            tabBarIcon: ({ color, size }) => <Gavel color={color} size={size} />,
          }}
        />
         <Tab.Screen 
          name="Add" 
          component={AddProductScreen} 
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