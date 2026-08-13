import React from 'react';
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
<<<<<<< HEAD

export default function AddressScreen({navigation}) {
  const handleSave = () => {
    navigation.navigate('BankPayout')
  };

  const handleSkip = () => {
    navigation.goBack();
  };
=======
import { ChevronDown} from 'lucide-react-native';

export default function AddressScreen({navigation}) {

  const handleSave = () => {
    navigation.navigate('BankPayout');
  };

>>>>>>> 5868ec724bf3af1af56aaa9ff8b75a6d6db523eb

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
<<<<<<< HEAD

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

=======
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
>>>>>>> 5868ec724bf3af1af56aaa9ff8b75a6d6db523eb
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 30,
          }}
<<<<<<< HEAD
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          <View className="px-8 pt-10">

            <utils.components.Header label="Address Details" />
=======
        
          showsVerticalScrollIndicator={false}>
        <View className="px-8 pt-10">
          <utils.components.Header label="Address Details" />

          

        <Text
          className="text-lg font-bold mb-2 pt-4"
          style={{color: utils.colors.black}}>
          Address Line 1
        </Text>
>>>>>>> 5868ec724bf3af1af56aaa9ff8b75a6d6db523eb

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
<<<<<<< HEAD
              className="text-base mt-2 mb-6"
              style={{color: utils.colors.grey}}>
              Add your address details to receive payments.
=======
              className="text-lg font-bold text-center"
              style={{color: utils.colors.white}}>
              Save Address
>>>>>>> 5868ec724bf3af1af56aaa9ff8b75a6d6db523eb
            </Text>
          </TouchableOpacity>

<<<<<<< HEAD
            <Text
              className="text-lg font-bold mb-2"
              style={{color: utils.colors.black}}>
              Address Line 1
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                placeholder="123 Main St"
                placeholderTextColor={utils.colors.grey}
              />

            </View>

            <Text
              className="text-lg font-bold mt-6 mb-2"
              style={{color: utils.colors.black}}>
              Address Line 2
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                placeholder="Apartment/Suite"
                placeholderTextColor={utils.colors.grey}
              />

            </View>

            <Text
              className="text-lg font-bold mt-6 mb-2"
              style={{color: utils.colors.black}}>
              City
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                placeholder="City"
                placeholderTextColor={utils.colors.grey}
              />

            </View>

            <Text
              className="text-lg font-bold mt-6 mb-2"
              style={{color: utils.colors.black}}>
              State
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                placeholder="State"
                placeholderTextColor={utils.colors.grey}
              />

            </View>

            <Text
              className="text-lg font-bold mt-6 mb-2"
              style={{color: utils.colors.black}}>
              Zip Code
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                placeholder="Zip Code"
                placeholderTextColor={utils.colors.grey}
                keyboardType="numeric"
              />

            </View>

            <Text
              className="text-lg font-bold mt-6 mb-2"
              style={{color: utils.colors.black}}>
              Country
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                placeholder="Country"
                placeholderTextColor={utils.colors.grey}
              />

            </View>

            <TouchableOpacity
              className="py-4 rounded-xl mt-7"
              style={{backgroundColor: utils.colors.theme_color}}
              onPress={handleSave}>

              <Text
                className="text-lg font-bold text-center"
                style={{color: utils.colors.white}}>
                Save Address
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              className="py-4 mt-3"
              onPress={handleSkip}>

              <Text
                className="text-base font-semibold text-center"
                style={{color: utils.colors.grey}}>
                Skip
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>
=======

          <TouchableOpacity
            className=" py-3 rounded-xl mt-6"
            onPress={handleSave}>
            <Text
              className="text-lg font-bold text-center"
              style={{color: utils.colors.black}}>
              Skip
            </Text>
          </TouchableOpacity>
      
      </View>
>>>>>>> 5868ec724bf3af1af56aaa9ff8b75a6d6db523eb

         
        
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}