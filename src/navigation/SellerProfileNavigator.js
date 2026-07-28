import React  from 'react';
import  CompleteProfileScreen  from '../screens/seller/CompleteProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  BankPayoutScreen from '../screens/seller/BankPayoutScreen';
import  AddProductScreen  from '../screens/seller/AddProductScreen';



const Stack = createNativeStackNavigator();
export default function SellerProfileNavigator() {
    return (
     <Stack.Navigator>
        <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="BankPayout" component={BankPayoutScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddProduct" component={AddProductScreen} options={{ headerShown: false }}/>
         
          
           
   </Stack.Navigator>
  );
}
