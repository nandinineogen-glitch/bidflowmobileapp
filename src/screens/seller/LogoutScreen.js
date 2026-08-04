import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';
import { Check} from 'lucide-react-native';

export default function LogoutScreen({navigation}) {
  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <View className="flex-1 justify-between px-4">

        <View className="flex-1 items-center justify-center">

          <View
            className="w-40 h-40 rounded-full items-center justify-center border-[5]"
            style={{borderColor: utils.colors.blue}}>
           <View className="flex-row items-center px-10 py-10 rounded-full border-8 border-green-500">
            <Check
              size={100}
              style={{color: '#22C55E'}}/>
              
            </View>

          </View>

          <Text
            className="text-center text-3xl font-bold mt-12"
            style={{color: utils.colors.black}}>
            Logged Out Successfully
          </Text>

          <Text
            className="text-center text-lg mt-5"
            style={{color: utils.colors.grey}}>
            You have been logged out
          </Text>

          <Text
            className="text-center text-lg"
            style={{color: utils.colors.grey}}>
            from your account.
          </Text>

        </View>

        <TouchableOpacity
          className="rounded-xl mb-20 py-4 mx-2"
          style={{backgroundColor: utils.colors.theme_color}}
          onPress={() => navigation.replace('Login')}>
          <Text
            className="text-center text-xl font-bold"
            style={{color: utils.colors.white}}>
            Login Again
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}