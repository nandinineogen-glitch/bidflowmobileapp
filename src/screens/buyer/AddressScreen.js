
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CirclePlus, ChevronDown} from 'lucide-react-native';
import utils from '../../utils';

const addressOptions = [
  'Home Address',
  'Office Address',
  'Other Address',
];

export default function AddressScreen({navigation}) {
  const [addressCount, setAddressCount] = useState(1);
  const [selectedType, setSelectedType] = useState({});
  const [openAddress, setOpenAddress] = useState(null);

  const addAddress = () => {
    if (addressCount < 3) {
      setAddressCount(addressCount + 1);
    }
  };

  const selectType = (addressNumber, type) => {
    setSelectedType({
      ...selectedType,
      [addressNumber]: type,
    });

    setOpenAddress(null);
  };

  const saveAddress = () => {
    navigation.navigate('BankPayout');
  };

  const showAddress = addressNumber => {
    return (
      <View
        key={addressNumber}
        className="mt-6">

        <Text
          className="text-xl font-bold mb-5"
          style={{
            color: utils.colors.black,
          }}>
          Address {addressNumber}
        </Text>

        <Text
          className="text-lg font-bold mb-2"
          style={{
            color: utils.colors.black,
          }}>
          Address Line 1
        </Text>

        <TextInput
          className="h-14 border rounded-xl px-4"
          placeholder="123 Main St"
          placeholderTextColor={utils.colors.grey}
          style={{
            borderColor: utils.colors.lightGrey,
            color: utils.colors.black,
          }}
        />

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{
            color: utils.colors.black,
          }}>
          Address Line 2
        </Text>

        <TextInput
          className="h-14 border rounded-xl px-4"
          placeholder="Apartment/Suite"
          placeholderTextColor={utils.colors.grey}
          style={{
            borderColor: utils.colors.lightGrey,
            color: utils.colors.black,
          }}
        />

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{
            color: utils.colors.black,
          }}>
          City
        </Text>

        <TextInput
          className="h-14 border rounded-xl px-4"
          placeholder="City"
          placeholderTextColor={utils.colors.grey}
          style={{
            borderColor: utils.colors.lightGrey,
            color: utils.colors.black,
          }}
        />

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{
            color: utils.colors.black,
          }}>
          State
        </Text>

        <TextInput
          className="h-14 border rounded-xl px-4"
          placeholder="State"
          placeholderTextColor={utils.colors.grey}
          style={{
            borderColor: utils.colors.lightGrey,
            color: utils.colors.black,
          }}
        />

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{
            color: utils.colors.black,
          }}>
          Zip Code
        </Text>

        <TextInput
          className="h-14 border rounded-xl px-4"
          placeholder="Zip Code"
          placeholderTextColor={utils.colors.grey}
          keyboardType="numeric"
          style={{
            borderColor: utils.colors.lightGrey,
            color: utils.colors.black,
          }}
        />

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{
            color: utils.colors.black,
          }}>
          Country
        </Text>

        <TextInput
          className="h-14 border rounded-xl px-4"
          placeholder="Country"
          placeholderTextColor={utils.colors.grey}
          style={{
            borderColor: utils.colors.lightGrey,
            color: utils.colors.black,
          }}
        />

        <Text
          className="text-lg font-bold mt-6 mb-2"
          style={{
            color: utils.colors.black,
          }}>
          Address Type
        </Text>

        <TouchableOpacity
          onPress={() =>
            setOpenAddress(
              openAddress === addressNumber
                ? null
                : addressNumber,
            )
          }
          activeOpacity={0.8}
          className="h-14 border rounded-xl px-4 flex-row items-center justify-between"
          style={{
            borderColor: utils.colors.lightGrey,
          }}>

          <Text
            style={{
              color: selectedType[addressNumber]
                ? utils.colors.black
                : utils.colors.grey,
            }}>
            {selectedType[addressNumber] ||
              'Select Address Type'}
          </Text>

          <ChevronDown
            size={20}
            color={utils.colors.grey}
          />

        </TouchableOpacity>

        {openAddress === addressNumber && (
          <View
            className="border rounded-xl mt-2 overflow-hidden"
            style={{
              borderColor: utils.colors.lightGrey,
            }}>

            {addressOptions.map(type => (
              <TouchableOpacity
                key={type}
                onPress={() =>
                  selectType(addressNumber, type)
                }
                className="px-4 py-4">

                <Text
                  style={{
                    color: utils.colors.black,
                  }}>
                  {type}
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
      style={{
        backgroundColor: utils.colors.white,
      }}>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={
          Platform.OS === 'ios' ? 'padding' : undefined
        }>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 32,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}>

          <View className="pt-10">

            <utils.components.Header
              label="Address Details"
            />

            <Text
              className="text-base mt-2"
              style={{
                color: utils.colors.grey,
              }}>
              Add your address details to receive payments.
            </Text>

            {Array.from(
              {length: addressCount},
              (_, index) => showAddress(index + 1),
            )}

            <TouchableOpacity
              onPress={saveAddress}
              activeOpacity={0.8}
              className="h-14 rounded-xl items-center justify-center mt-8"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>

              <Text
                className="text-lg font-bold"
                style={{
                  color: utils.colors.white,
                }}>
                Save Address
              </Text>

            </TouchableOpacity>

            {addressCount < 3 && (
              <TouchableOpacity
                onPress={addAddress}
                activeOpacity={0.8}
                className="items-center mt-6">

                <CirclePlus
                  size={40}
                  color={utils.colors.theme_color}
                />

                <Text
                  className="font-bold mt-2"
                  style={{
                    color: utils.colors.black,
                  }}>
                  Add Another Address
                </Text>

              </TouchableOpacity>
            )}

            {addressCount === 3 && (
              <Text
                className="text-center mt-5"
                style={{
                  color: utils.colors.grey,
                }}>
                Maximum 3 addresses allowed
              </Text>
            )}

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

