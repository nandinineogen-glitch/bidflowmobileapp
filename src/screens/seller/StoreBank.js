import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import utils from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const StoreBank = ({navigation}) => {
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [bankName, setBankName] = useState('');

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView
        className="p-10"
        showsVerticalScrollIndicator={false}>
        <View className="mt-10">
          <utils.components.Header label="Bank Details" />

          <Text
            className="text-lg mt-2 mb-10 font-bold"
            style={{color: utils.colors.grey}}>
            Add your bank details for receiving payouts.
          </Text>

          <Text
            className="text-lg mb-2 font-bold"
            style={{color: utils.colors.black}}>
            Account Holder Name
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{borderColor: utils.colors.lightGrey}}>
            <TextInput
              value={accountHolder}
              onChangeText={setAccountHolder}
              placeholder="Enter account holder name"
              placeholderTextColor={utils.colors.grey}
              className="h-14"
              style={{color: utils.colors.black}}
            />
          </View>

          <Text
            className="text-lg mb-2 mt-6 font-bold"
            style={{color: utils.colors.black}}>
            Bank Name
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{borderColor: utils.colors.lightGrey}}>
            <TextInput
              value={bankName}
              onChangeText={setBankName}
              placeholder="Enter bank name"
              placeholderTextColor={utils.colors.grey}
              className="h-14"
              style={{color: utils.colors.black}}
            />
          </View>

          <Text
            className="text-lg mb-2 mt-6 font-bold"
            style={{color: utils.colors.black}}>
            Account Number
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{borderColor: utils.colors.lightGrey}}>
            <TextInput
              value={accountNumber}
              onChangeText={setAccountNumber}
              placeholder="Enter account number"
              placeholderTextColor={utils.colors.grey}
              keyboardType="numeric"
              className="h-14"
              style={{color: utils.colors.black}}
            />
          </View>

          <Text
            className="text-lg mb-2 mt-6 font-bold"
            style={{color: utils.colors.black}}>
            IFSC Code
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{borderColor: utils.colors.lightGrey}}>
            <TextInput
              value={ifsc}
              onChangeText={setIfsc}
              placeholder="Enter IFSC code"
              placeholderTextColor={utils.colors.grey}
              autoCapitalize="characters"
              className="h-14"
              style={{color: utils.colors.black}}
            />
          </View>

          <TouchableOpacity
            className="rounded-xl mt-40 py-4 mb-10"
            style={{backgroundColor: utils.colors.theme_color}}
            onPress={handleSave}>
            <Text
              className="text-center text-lg font-bold"
              style={{color: utils.colors.white}}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreBank;