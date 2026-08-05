import React from 'react';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import ResetPasswordScreen from './src/screens/auth/ResetPasswordScreen';
import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';
import OTPScreen from './src/screens/auth/OTPScreen';
import RoleSelectionScreen from './src/screens/auth/RoleSelectionScreen';
import OnBoardingScreen from './src/screens/auth/OnBoardingScreen';
import SellerBottomTabNavigator from './src/navigation/SellerBottomTabNavigator';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import AuthProvider from './src/context/AuthContext.js';
import CompleteProfileScreen from './src/screens/seller/CompleteProfileScreen';
import ProfileScreen from './src/screens/seller/ProfileScreen';
import EarningScreen from './src/screens/seller/EarningScreen.js';
import SettingScreen from './src/screens/seller/SettingScreen.js';
import  WalletScreen  from './src/screens/seller/WalletScreen.js';
import NotificationScreen from './src/screens/seller/NotificationScreen.js';
import LogoutScreen from './src/screens/seller/LogoutScreen.js';
import AnalyticsScreen from './src/screens/seller/AnalyticsScreen.js';
import AddressScreen from './src/screens/seller/AddressScreen.js';

export default function App() {
    return (<SafeAreaProvider>
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  </SafeAreaProvider>);
  
} 

