import React from 'react';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import utils from '../../utils';
import { Eye } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const ResetPasswordScreen = () => {
  return (
      <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white}} >
      <ScrollView className="p-10">
        < View className="mt-28" style={{ backgroundColor: utils.colors.white }}>
          <utils.components.Header label="Reset Password" />
          <Text className="text-lg  mt-2 mb-10 font-bold" style={{ color: utils.colors.grey }}>
            Create a new password for your account
          </Text>

        <Text className="text-lg mt-10 mb-2" style={{ color: utils.colors.black }}>
            Current Password
          </Text>
          <View className="border rounded-xl px-4 flex-row items-center" style={{ borderColor: utils.colors.lightGrey }}>

            <TextInput
              placeholder="Your Current Password"
              className='h-14 flex-1'
              secureTextEntry={true}
            >

            </TextInput>
            <Eye size={20} />
          </View>

         <Text className="text-lg mt-10 mb-2" style={{ color: utils.colors.black }}>
            New Password
          </Text>
          <View className="border rounded-xl px-4 flex-row items-center" style={{ borderColor: utils.colors.lightGrey }}>

            <TextInput
              placeholder="Enter New Password"
              className='h-14 flex-1'
              secureTextEntry={true}
            >

            </TextInput>
            <Eye size={20} />
          </View>

         <Text className="text-lg mt-10 mb-2" style={{ color: utils.colors.black }}>
            Confirm Password
          </Text>
          <View className="border rounded-xl px-4 flex-row items-center" style={{ borderColor: utils.colors.lightGrey }}>

            <TextInput
              placeholder="Confirm Your Password"
              className='h-14 flex-1'
              secureTextEntry={true}
            >

            </TextInput>
            <Eye size={20} />
          </View>

         
          <TouchableOpacity className="rounded-xl py-4 mb-4 mt-10" style={{ backgroundColor: utils.colors.blue }}>
            <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Reset Password</Text>
          </TouchableOpacity>
        </View>
       </ScrollView>
      </SafeAreaView>
  );
};

export default ResetPasswordScreen;
