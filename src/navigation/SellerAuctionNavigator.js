import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiveAuctionMonitor from '../screens/seller/LiveAuctionMonitor';
import BidHistory from '../screens/seller/BidHistory';

const Stack = createNativeStackNavigator();
export default function SellerAuctionNavigator() {
    return (
     <Stack.Navigator>
       
           <Stack.Screen name="LiveAuctionMonitor" component={LiveAuctionMonitor} options={{ headerShown: false}}/>
       <Stack.Screen name="BidHistory" component={BidHistory} options={{ headerShown: false}}/>
        
           
   </Stack.Navigator>
  );
}
