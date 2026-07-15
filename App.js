import React from 'react';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import ResetPasswordScreen from './src/screens/auth/ResetPasswordScreen';
import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';
import OTPScreen from './src/screens/auth/OTPScreen';
import RoleSelectionScreen from './src/screens/auth/RoleSelectiomScreen';
import OnBoardingScreen from './src/screens/auth/OnBoardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import SellerBottomTabNavigator from './src/navigation/SellerBottomTabNavigator';

import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
     <NavigationContainer>

    <SellerBottomTabNavigator />
    </NavigationContainer>
  );
}