import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthContext} from '../context/AuthContext';

import SellerBottomTabNavigator from './SellerBottomTabNavigator';

import CompleteProfileScreen from '../screens/seller/CompleteProfileScreen';
import BankPayoutScreen from '../screens/seller/BankPayoutScreen';
import AddProductScreen from '../screens/seller/AddProductScreen';
import AddressScreen from '../screens/seller/AddressScreen';
import ProductImages from '../screens/seller/ProductImages';
import AuctionSettings from '../screens/seller/AuctionSettings';
import ShippingandReturns from '../screens/seller/ShippingandReturns';
import ProductPreview from '../screens/seller/ProductPreview';
import PendingApproval from '../screens/seller/PendingApproval';

import LiveAuctionMonitor from '../screens/seller/LiveAuctionMonitor';
import BidHistory from '../screens/seller/BidHistory';

import ProfileScreen from '../screens/seller/ProfileScreen';
import StoreProfileScreen from '../screens/seller/StoreProfile';
import StoreBankScreen from '../screens/seller/StoreBank';

import SettingScreen from '../screens/seller/SettingScreen';
import EarningScreen from '../screens/seller/EarningScreen';
import WalletScreen from '../screens/seller/WalletScreen';
import NotificationScreen from '../screens/seller/NotificationScreen';

import LogoutScreen from '../screens/seller/LogoutScreen';
import AnalyticsScreen from '../screens/seller/AnalyticsScreen';
const Stack = createNativeStackNavigator();

export default function SellerNavigator() {
  const {profileCompleted} = useContext(AuthContext);

  return (
    <Stack.Navigator
      initialRouteName={
        profileCompleted ? 'SellerBottomTab' : 'CompleteProfile'
      }
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        name="CompleteProfile"
        component={CompleteProfileScreen}
      />

      <Stack.Screen
        name="BankPayout"
        component={BankPayoutScreen}
      />

       <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
      />

      <Stack.Screen
        name="AddProduct"
        component={AddProductScreen}
      />

      <Stack.Screen
        name="SellerBottomTab"
        component={SellerBottomTabNavigator}
      />

      <Stack.Screen
        name="ProductImages"
        component={ProductImages}
      />

      <Stack.Screen
        name="AuctionSettings"
        component={AuctionSettings}
      />

      <Stack.Screen
        name="ShippingandReturns"
        component={ShippingandReturns}
      />

      <Stack.Screen
        name="ProductPreview"
        component={ProductPreview}
      />

      <Stack.Screen
        name="PendingApproval"
        component={PendingApproval}
      />

      <Stack.Screen
        name="LiveAuctionMonitor"
        component={LiveAuctionMonitor}
      />

      <Stack.Screen
        name="BidHistory"
        component={BidHistory}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />

      <Stack.Screen
        name="StoreProfile"
        component={StoreProfileScreen}
      />

      <Stack.Screen
        name="StoreBank"
        component={StoreBankScreen}
      />

      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
      />

      <Stack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
      />

      <Stack.Screen
        name="AnalyticsScreen"
        component={AnalyticsScreen}
      />


      <Stack.Screen
        name="EarningScreen"
        component={EarningScreen}
      />

      <Stack.Screen
        name="WalletScreen"
        component={WalletScreen}
      />

      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />

    </Stack.Navigator>
  );
}