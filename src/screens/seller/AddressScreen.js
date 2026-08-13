
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';
import { ChevronDown} from 'lucide-react-native';

export default function AddressScreen({navigation}) {

  const handleSave = () => {
    navigation.navigate('AddProduct');
  };


  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 30,
          }}
        
          showsVerticalScrollIndicator={false}>
        <View className="px-8 pt-10">
          <utils.components.Header label="Address Details" />

          

        <Text
          className="text-lg font-bold mb-2 pt-4"
          style={{color: utils.colors.black}}>
          Address Line 1
        </Text>

        <View
          className="border rounded-xl px-4"
          style={{borderColor: utils.colors.lightGrey}}>
          <TextInput className="h-14" placeholder="123 Main St" />
        </View>

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{color: utils.colors.black}}>
          Address Line 2
        </Text>

        <View
          className="border rounded-xl px-4"
          style={{borderColor: utils.colors.lightGrey}}>
          <TextInput className="h-14" placeholder="Apartment/Suite" />
        </View>

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{color: utils.colors.black}}>
          City
        </Text>

        <View
          className="border rounded-xl px-4"
          style={{borderColor: utils.colors.lightGrey}}>
          <TextInput className="h-14" placeholder="City" />
        </View>

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{color: utils.colors.black}}>
          State
        </Text>

        <View
          className="border rounded-xl px-4"
          style={{borderColor: utils.colors.lightGrey}}>
          <TextInput className="h-14" placeholder="State" />
        </View>

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{color: utils.colors.black}}>
          Zip Code
        </Text>

        <View
          className="border rounded-xl px-4"
          style={{borderColor: utils.colors.lightGrey}}>
          <TextInput className="h-14" placeholder="Zip Code" />
        </View>

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{color: utils.colors.black}}>
          Country
        </Text>

        <View
          className="border rounded-xl px-4"
          style={{borderColor: utils.colors.lightGrey}}>
          <TextInput className="h-14" placeholder="Country" />
        </View>

        <TouchableOpacity
            className="bg-blue-500 py-3 rounded-xl mt-6"
            onPress={handleSave}>
            <Text
              className="text-lg font-bold text-center"
              style={{color: utils.colors.white}}>
              Save Address
            </Text>
          </TouchableOpacity>


        
      
      </View>

         
        
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

