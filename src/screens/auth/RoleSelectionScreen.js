import React, {useContext, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../../context/AuthContext';
import utils from '../../utils';

const RoleSelectionScreen = ({navigation}) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const {setRole} = useContext(AuthContext);

  const continueButton = () => {
    if (!selectedRole) {
      Alert.alert(
        'Select Role',
        'Please select Buyer or Seller',
      );
      return;
    }

    setRole(selectedRole);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: utils.colors.white,
      }}>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>

        <View className="mt-6">

          <Image
            source={utils.assets.trade}
            className="w-52 h-52 self-center"
            resizeMode="contain"
          />

          <View className="items-center mt-8">
            <utils.components.Header label="Select Your Role" />
          </View>

          <Text
            className="mt-8 mb-10"
            style={{
              color: utils.colors.grey,
            }}>
            Select{' '}

            <Text
              className="font-bold"
              style={{
                color: utils.colors.black,
              }}>
              Buyer
            </Text>

            {' '}if you want to bid and purchase products or{' '}

            <Text
              className="font-bold"
              style={{
                color: utils.colors.black,
              }}>
              Seller
            </Text>

            {' '}if you want to list products and create auctions.
          </Text>

          <View className="flex-row justify-between">

            <TouchableOpacity
              onPress={() => setSelectedRole('buyer')}
              className="w-[47%] h-44 border rounded-xl items-center"
              style={{
                borderColor:
                  selectedRole === 'buyer'
                    ? utils.colors.theme_color
                    : utils.colors.lightGrey,
              }}>

              <Image
                source={utils.assets.buyer}
                className="w-24 h-24 mt-5"
                resizeMode="contain"
              />

              <Text
                className="text-lg font-bold mt-4"
                style={{
                  color:
                    selectedRole === 'buyer'
                      ? utils.colors.theme_color
                      : utils.colors.black,
                }}>
                Buyer
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedRole('seller')}
              className="w-[47%] h-44 border rounded-xl items-center"
              style={{
                borderColor:
                  selectedRole === 'seller'
                    ? utils.colors.theme_color
                    : utils.colors.lightGrey,
              }}>

              <Image
                source={utils.assets.seller}
                className="w-24 h-24 mt-5"
                resizeMode="contain"
              />

              <Text
                className="text-lg font-bold mt-4"
                style={{
                  color:
                    selectedRole === 'seller'
                      ? utils.colors.theme_color
                      : utils.colors.black,
                }}>
                Seller
              </Text>

            </TouchableOpacity>

          </View>

          <TouchableOpacity
            onPress={continueButton}
            className="h-14 rounded-xl items-center justify-center mt-14"
            style={{
              backgroundColor: utils.colors.theme_color,
            }}>

            <Text
              className="text-lg font-bold"
              style={{
                color: utils.colors.white,
              }}>
              Get Started
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default RoleSelectionScreen;