import React  from 'react';
import ProductImages from '../screens/seller/ProductImages';
import AuctionSettings from '../screens/seller/AuctionSettings';
import ShippingandReturns from '../screens/seller/ShippingandReturns';
import ProductPreview from '../screens/seller/ProductPreview';
import PendingApproval from '../screens/seller/PendingApproval';


import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();
export default function SellerNavigator() {
    return (
     <Stack.Navigator>
      
        <Stack.Screen name="ProductImages" component={ProductImages} options={{ headerShown: false }}/>
          <Stack.Screen name="AuctionSettings" component={AuctionSettings} options={{ headerShown: false }}/>
          <Stack.Screen name="ShippingandReturns" component={ShippingandReturns} options={{ headerShown: false }}/>
           <Stack.Screen name="ProductPreview" component={ProductPreview} options={{ headerShown: false }}/>
           <Stack.Screen name="PendingApproval" component={PendingApproval} options={{ headerShown: false}}/>
          
           
   </Stack.Navigator>
  );
}
