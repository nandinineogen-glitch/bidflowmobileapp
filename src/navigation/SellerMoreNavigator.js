import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiveAuctionMonitor from '../screens/seller/LiveAuctionMonitor';
import ProfilleScreen from '../screens/seller/ProfilleScreen';

const Stack = createNativeStackNavigator();
export default function SellerAuctionNavigator() {
    return (
     <Stack.Navigator>
       
           <Stack.Screen name="ProfilleScreen" component={ProfilleScreen} options={{ headerShown: false}}/>
           
   </Stack.Navigator>
  );
}
