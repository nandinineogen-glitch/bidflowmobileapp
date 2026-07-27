import React , {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  CompleteProfileScreen  from '../screens/seller/CompleteProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  BankPayoutScreen from '../screens/seller/BankPayoutScreen';
import  AddProductScreen  from '../screens/seller/AddProductScreen';
import ProductImages from '../screens/seller/ProductImages';
import AuctionSettings from '../screens/seller/AuctionSettings';
import ShippingandReturns from '../screens/seller/ShippingandReturns';

const Stack = createNativeStackNavigator();
export default function SellerNavigation() {
    return (
     <Stack.Navigator>
        <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="BankPayout" component={BankPayoutScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddProduct" component={AddProductScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="ProductImages" component={ProductImages} options={{ headerShown: false }}/>
          <Stack.Screen name="AuctionSettings" component={AuctionSettings} options={{ headerShown: false }}/>
           <Stack.Screen name="ShippingandReturns" component={ShippingandReturns} options={{ headerShown: false }}/>
          
   </Stack.Navigator>
  );
}
