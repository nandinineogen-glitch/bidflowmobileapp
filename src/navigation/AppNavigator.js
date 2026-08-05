import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../context/AuthContext';

import AuthNavigator from './AuthNavigator';
import SellerNavigator from './SellerNavigator';

import BuyerHomeScreen from '../screens/buyer/BuyerHomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isLoggedIn, role, profileCompleted } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isLoggedIn ? (
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
          />
        ) : role === 'seller' ? (
          <Stack.Screen
            key={profileCompleted ? 'completed' : 'incomplete'}
            name="SellerNavigator"
            component={SellerNavigator}
          />
        ) : (
          <Stack.Screen
            name="BuyerHome"
            component={BuyerHomeScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}