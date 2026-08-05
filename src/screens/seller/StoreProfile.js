import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import utils from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const StoreProfile = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    {label: 'Electronics', value: 'electronics'},
    {label: 'Vendor', value: 'vendor'},
    {label: 'Salesman', value: 'salesman'},
  ];

  const handleSelect = option => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView className="p-10">
        <View
          className="mt-10"
          style={{backgroundColor: utils.colors.white}}>
          <utils.components.Header label="Store Profile" />

          <Text
            className="text-lg mt-2 mb-10 font-bold"
            style={{color: utils.colors.grey}}>
            Add more details so buyers can trust you.
          </Text>

          <Text
            className="text-lg font-bold"
            style={{color: utils.colors.black}}>
            Profile Photo
          </Text>
        </View>

        <View className="items-center">
          <Image
            source={utils.assets.profile}
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>

        <Text
          className="text-lg mb-2 mt-5 font-bold"
          style={{color: utils.colors.black}}>
          Store Name
        </Text>

        <View
          className="border rounded-xl px-4"
          style={{borderColor: utils.colors.lightGrey}}>
          <TextInput
            placeholder="Enter store name"
            className="h-14"
            placeholderTextColor={utils.colors.grey}
            style={{color: utils.colors.black}}
          />
        </View>

        <View className="w-full mt-8">
          <Text
            className="text-lg font-bold"
            style={{color: utils.colors.black}}>
            Business Type
          </Text>

          <TouchableOpacity
            onPress={() => setIsOpen(!isOpen)}
            className="flex-row justify-between items-center w-full px-4 py-5 rounded-xl border mt-2"
            style={{
              borderColor: utils.colors.lightGrey,
              backgroundColor: utils.colors.white,
            }}>
            <Text
              className="text-base"
              style={{color: utils.colors.black}}>
              {selectedValue
                ? selectedValue.label
                : 'Select an option...'}
            </Text>

            <Text
              className="text-sm"
              style={{color: utils.colors.black}}>
              {isOpen ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          {isOpen && (
            <View
              className="w-full mt-1 rounded-lg border"
              style={{
                borderColor: utils.colors.lightGrey,
                backgroundColor: utils.colors.white,
              }}>
              <FlatList
                data={options}
                keyExtractor={item => item.value}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    className="px-4 py-4">
                    <Text
                      className="text-base"
                      style={{color: utils.colors.black}}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>

        <Text
          className="text-lg mb-2 mt-6 font-bold"
          style={{color: utils.colors.black}}>
          Address
        </Text>

        <View
          className="border rounded-xl px-4"
          style={{borderColor: utils.colors.lightGrey}}>
          <TextInput
            placeholder="Enter address"
            className="h-14"
            placeholderTextColor={utils.colors.grey}
            style={{color: utils.colors.black}}
          />
        </View>

        <TouchableOpacity
          className="rounded-xl py-4 mt-8 mb-10"
          style={{backgroundColor: utils.colors.theme_color}}
          onPress={handleSave}>
          <Text
            className="text-center text-lg font-bold"
            style={{color: utils.colors.white}}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreProfile;