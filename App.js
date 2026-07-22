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

export default function App() {
  return (
    <AuthProvider>
    <SafeAreaProvider>
    <AppNavigator />
    </SafeAreaProvider>
    </AuthProvider>
  );
}