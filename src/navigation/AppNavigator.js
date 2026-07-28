import React , {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import SellerAuctionNavigator from './SellerAuctionNavigator';
import BuyerHomeScreen from '../screens/buyer/BuyerHomeScreen';
import SellerBottomTabNavigator from './SellerBottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import SellerProfileNavigator from './SellerProfileNavigator';
import SellerNavigator from './SellerNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isLoggedIn, profileCompleted,role } = useContext(AuthContext);
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {!isLoggedIn ? ( 
       <Stack.Screen name="AuthNavigator" component={AuthNavigator} options={{ headerShown: false}} />  
      ) : role === 'seller' ? (
        profileCompleted ?(<>
         
             <Stack.Screen name="SellerNavigator" component={SellerNavigator} options={{ headerShown: false}} />
          <Stack.Screen name="SellerBottomTab" component={SellerBottomTabNavigator} options={{ headerShown: false}} />
          <Stack.Screen name="SellerAuctionNavigator" component={SellerAuctionNavigator} options={{ headerShown:false}} />
          </>
        ): (
           <Stack.Screen name="SellerProfileNavigator" component={SellerProfileNavigator} options={{ headerShown: false}} />
        )
      ) :
      (
        <Stack.Screen name="BuyerHome" component={BuyerHomeScreen} options={{ headerShown: false }}/>
      )
      } 
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}
