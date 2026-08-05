
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';
import {CirclePlus, ChevronDown} from 'lucide-react-native';

export default function AddressScreen({navigation}) {
  const [addressCount, setAddressCount] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [addressTypes, setAddressTypes] = useState({});

  const addressOptions = [
    'Home Address',
    'Office Address',
    'Other Address',
  ];

  const handleSave = () => {
    navigation.navigate('BankPayout');
  };

  const handleAddAddress = () => {
    if (addressCount < 3) {
      setAddressCount(addressCount + 1);
    }
  };

  const selectAddressType = (addressNumber, option) => {
    setAddressTypes({
      ...addressTypes,
      [addressNumber]: option,
    });
    setOpenDropdown(null);
  };

  const renderAddress = addressNumber => {
    return (
      <View className="mt-6" key={addressNumber}>
        <Text
          className="text-xl font-bold mb-5"
          style={{color: utils.colors.black}}>
          Address {addressNumber}
        </Text>

        <Text
          className="text-lg font-bold mb-2"
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

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{color: utils.colors.black}}>
          Address Type
        </Text>

        <TouchableOpacity
          className="h-14 border rounded-xl px-4 flex-row items-center justify-between"
          style={{borderColor: utils.colors.lightGrey}}
          onPress={() =>
            setOpenDropdown(
              openDropdown === addressNumber ? null : addressNumber,
            )
          }>
          <Text
            className="text-base"
            style={{
              color: addressTypes[addressNumber]
                ? utils.colors.black
                : utils.colors.grey,
            }}>
            {addressTypes[addressNumber] || 'Select Address Type'}
          </Text>

          <ChevronDown size={20} color={utils.colors.grey} />
        </TouchableOpacity>

        {openDropdown === addressNumber && (
          <View
            className="border rounded-xl mt-2 overflow-hidden"
            style={{borderColor: utils.colors.lightGrey}}>
            {addressOptions.map(option => (
              <TouchableOpacity
                key={option}
                className="px-4 py-4"
                onPress={() => selectAddressType(addressNumber, option)}>
                <Text
                  className="text-base"
                  style={{color: utils.colors.black}}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 40}}>
        <View className="px-8 pt-10">
          <utils.components.Header label="Address Details" />

          <Text
            className="text-base mt-2 mb-2"
            style={{color: utils.colors.grey}}>
            Add your address details to receive payments.
          </Text>

          {Array.from({length: addressCount}, (_, index) =>
            renderAddress(index + 1),
          )}

          <TouchableOpacity
            className="bg-blue-500 py-3 px-4 rounded-xl mt-6"
            onPress={handleSave}>
            <Text
              className="text-lg font-bold text-center"
              style={{color: utils.colors.white}}>
              Save Address
            </Text>
          </TouchableOpacity>

          {addressCount < 3 && (
            <TouchableOpacity
              className="items-center justify-center mt-5"
              onPress={handleAddAddress}>
              <CirclePlus size={45} color="#22C55E" />

              <Text
                className="text-base font-semibold mt-2"
                style={{color: utils.colors.black}}>
                Add Another Address
              </Text>
            </TouchableOpacity>
          )}

          {addressCount === 3 && (
            <Text
              className="text-center mt-4"
              style={{color: utils.colors.grey}}>
              Maximum 3 addresses allowed
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

