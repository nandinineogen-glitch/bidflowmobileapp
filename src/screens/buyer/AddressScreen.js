import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { CirclePlus } from 'lucide-react-native';

export default function AddressScreen({ navigation }) {
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
    navigation.navigate('BankPyout');
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
                                  
      <View className="flex-1 px-8 pt-10">
        <utils.components.Header label="Address Details" />

        <Text className="text-base mt-2 mb-8" style={{ color: utils.colors.grey }}>
          Add your address details to receive payments.
        </Text>
        <Text className="text-lg font-bold mb-2" style={{ color: utils.colors.black }}>
          Address Line 1
        </Text>
        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
          <TextInput
            className="h-14"
            placeholder="123 Main St"
          />
        </View>
        <Text className="text-lg font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
          Address Line 2
        </Text> 
        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
          <TextInput
            className="h-14"
            placeholder="Apartment/Suite"
          />
        </View>
        <Text className="text-lg font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
            City
        </Text>
        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
            <TextInput
                className="h-14"
                placeholder="City"
            />
        </View>
        <Text className="text-lg font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
            State
        </Text>
        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
            <TextInput
                className="h-14"
                placeholder="State"
            />
        </View>
        <Text className="text-lg font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
            Zip Code
        </Text>
        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
            <TextInput
                className="h-14"
                placeholder="Zip Code"
            />
        </View>
        <Text className="text-lg font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
            Country
        </Text>
        <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
            <TextInput
                className="h-14"
                placeholder="Country"
            />
        </View>
      
     
       
     
        <TouchableOpacity
          className="bg-blue-500 text-white py-3 px-4 rounded-xl mt-6"
          onPress={handleSave}
        >
          <Text className="text-lg font-bold text-center" style={{ color: utils.colors.white }}>
            Save Address
          </Text>
        </TouchableOpacity>
        <View>
           
            <CirclePlus
              size={100}
              style={{color: '#22C55E'}}/>
              
            

          </View>

      </View>
 
    </SafeAreaView>
  );
}