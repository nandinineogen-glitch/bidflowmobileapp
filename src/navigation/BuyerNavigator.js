import BuyerBottomNavigation from './BuyerBottomNavigation';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddressScreen from '../screens/buyer/AddressScreen';
import BankPayoutScreen from '../screens/buyer/BankPayoutScreen';
import CategoriesScreen from '../screens/buyer/CategoriesScreen';
import ProductListingScreen from '../screens/buyer/ProductListingScreen';
import FilterScreen from '../screens/buyer/FilterScreen';
import {AuthContext} from '../context/AuthContext';
const Stack = createNativeStackNavigator();

export default function BuyerNavigator() {
     const {profileCompleted} = useContext(AuthContext);
    return(
<Stack.Navigator
      initialRouteName={
        profileCompleted ? 'BuyerBottomTab' : 'AddressScreen'
      }
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name="AddressScreen" component={AddressScreen} />
      <Stack.Screen name="BuyerBottomTab" component={BuyerBottomNavigation} />
      <Stack.Screen name="BankPayout" component={BankPayoutScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="ProductListing" component={ProductListingScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>


    );
}