import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';
import {AuthContext} from '../../context/AuthContext';

export default function BankPayoutScreen({navigation}) {
  const [bankOpen, setBankOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [primary, setPrimary] = useState(true);

  const {setProfileCompleted} = useContext(AuthContext);

  const banks = [
    {label: 'State Bank of India', value: 'sbi'},
    {label: 'HDFC Bank', value: 'hdfc'},
    {label: 'ICICI Bank', value: 'icici'},
    {label: 'Axis Bank', value: 'axis'},
    {label: 'Kotak Mahindra Bank', value: 'kotak'},
  ];

  const handleSelect = item => {
    setSelectedBank(item);
    setBankOpen(false);
  };

  const handleSave = () => {
    setProfileCompleted(true);

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'BuyerNavigator',
        },
      ],
    });
  };

  const handleSkip = () => {
    navigation.goBack();
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
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          <View className="flex-1 px-8 pt-10">

            <utils.components.Header label="Payout Settings" />

            <Text
              className="text-base mt-2 mb-8"
              style={{color: utils.colors.grey}}>
              Add your bank details to receive payments.
            </Text>

            <Text
              className="text-lg font-bold mb-2"
              style={{color: utils.colors.black}}>
              Account Holder Name
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                placeholder="John Doe"
              />

            </View>

            <Text
              className="text-lg font-bold mt-6 mb-2"
              style={{color: utils.colors.black}}>
              Bank Name
            </Text>

            <TouchableOpacity
              onPress={() => setBankOpen(!bankOpen)}
              className="border rounded-xl px-4 py-4 flex-row justify-between items-center"
              style={{borderColor: utils.colors.lightGrey}}>

              <Text style={{color: utils.colors.black}}>
                {selectedBank ? selectedBank.label : 'Select Bank'}
              </Text>

              <Text style={{color: utils.colors.grey}}>
                ▼
              </Text>

            </TouchableOpacity>

            {bankOpen && (
              <View
                className="border rounded-xl mt-2"
                style={{
                  borderColor: utils.colors.lightGrey,
                  backgroundColor: utils.colors.white,
                }}>

                <FlatList
                  data={banks}
                  keyExtractor={item => item.value}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      className="px-4 py-4"
                      onPress={() => handleSelect(item)}>

                      <Text style={{color: utils.colors.black}}>
                        {item.label}
                      </Text>

                    </TouchableOpacity>
                  )}
                />

              </View>
            )}

            <Text
              className="text-lg font-bold mt-6 mb-2"
              style={{color: utils.colors.black}}>
              Account Number
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                keyboardType="number-pad"
                placeholder="Enter account number"
              />

            </View>

            <Text
              className="text-lg font-bold mt-6 mb-2"
              style={{color: utils.colors.black}}>
              IFSC Code
            </Text>

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                className="h-14"
                placeholder="SBIN0001234"
                autoCapitalize="characters"
              />

            </View>

            <View className="flex-row justify-between items-center mt-8">

              <Text
                className="text-lg font-bold"
                style={{color: utils.colors.black}}>
                Set as Primary Account
              </Text>

              <Switch
                value={primary}
                onValueChange={setPrimary}
                trackColor={{
                  false: utils.colors.grey,
                  true: utils.colors.green,
                }}
                thumbColor="#f7f5f5"
                style={{
                  transform: [{scaleX: 1}, {scaleY: 1}],
                }}
              />

            </View>

            <TouchableOpacity
              onPress={handleSave}
              className="rounded-xl py-4 mt-28 mb-3"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>

              <Text
                className="text-center text-lg font-bold"
                style={{color: utils.colors.white}}>
                Save Details
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSkip}
              className="py-3 mb-6">

              <Text
                className="text-center text-base font-semibold"
                style={{color: utils.colors.grey}}>
                Skip
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}