import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils';

export default function BankPayoutScreen({ navigation }) {
  const [bankOpen, setBankOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [primary, setPrimary] = useState(true);

  const banks = [
    { label: 'State Bank of India', value: 'sbi' },
    { label: 'HDFC Bank', value: 'hdfc' },
    { label: 'ICICI Bank', value: 'icici' },
    { label: 'Axis Bank', value: 'axis' },
    { label: 'Kotak Mahindra Bank', value: 'kotak' },
  ];

  const handleSelect = item => {
    setSelectedBank(item);
    setBankOpen(false);
  };

  const handleSave = () => {
    navigation.navigate('AddProduct');
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
      <View className="flex-1 px-8 pt-10">
        <utils.components.Header label="Payout Details" />

        <Text className="text-base mt-2 mb-8" style={{ color: utils.colors.grey }}>
          Add your bank account to receive payouts securely.
        </Text>

        <Text className="text-lg font-bold mb-2" style={{ color: utils.colors.black }}>
          Account Holder Name
        </Text>

        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
          <TextInput
            className="h-14"
            placeholder="John Doe"
          />
        </View>

        <Text className="text-lg font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
          Bank Name
        </Text>

        <TouchableOpacity
          onPress={() => setBankOpen(!bankOpen)}
          className="border rounded-xl px-4 py-4 flex-row justify-between items-center"
          style={{ borderColor: utils.colors.lightGrey }}
        >
          <Text>
            {selectedBank ? selectedBank.label : 'Select Bank'}
          </Text>

          <Text>
            {bankOpen ? '▲' : '▼'}
          </Text>
        </TouchableOpacity>

        {bankOpen && (
          <View
            className="border rounded-xl mt-2"
            style={{
              borderColor: utils.colors.lightGrey,
              backgroundColor: utils.colors.white,
            }}
          >
            <FlatList
              data={banks}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="px-4 py-4"
                  onPress={() => handleSelect(item)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        <Text className="text-lg font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
          Account Number
        </Text>

        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
          <TextInput
            className="h-14"
            keyboardType="number-pad"
            placeholder="Enter account number"
          />
        </View>

        <Text className="text-lg font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
          IFSC Code
        </Text>

        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
          <TextInput
            className="h-14"
            placeholder="SBIN0001234"
            autoCapitalize="characters"
          />
        </View>

        <View className="flex-row justify-between items-center mt-8">
          <View>
            <Text className="text-lg font-bold" style={{ color: utils.colors.black }}>
              Set as Primary Account
            </Text>
          </View>

          <Switch
            value={primary}
            onValueChange={setPrimary}
            trackColor={{
              false: utils.colors.grey,
              true: utils.colors.green,
            }}
            thumbColor='#f7f5f5'
             style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }} 
          />
        </View>

        <TouchableOpacity
          onPress={handleSave}
          className="rounded-xl py-4 mt-28 mb-6"
          style={{ backgroundColor: utils.colors.blue }}
        >
          <Text
            className="text-center text-lg font-bold"
            style={{ color: utils.colors.white }}
          >
            Save Details
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}