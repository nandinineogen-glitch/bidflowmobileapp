import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';

export default function ProductPreview({navigation}) {
  const handleSave = () => {
    navigation.navigate('PendingApproval');
  };
  return (
    
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <View className="flex-1 mx-8">
        <View className="pt-6 pb-6">
          <Text
            className="text-3xl font-bold"
            style={{color: utils.colors.black}}>
            Preview Your Listing
          </Text>

          <View className="w-56 mt-2">
            <Text
              className="text-base"
              style={{color: utils.colors.grey}}>
              Review your product details before publishing.
            </Text>
          </View>
        </View>

        <View
          className="rounded-3xl p-5"
          style={{
            borderWidth: 1,
            borderColor: utils.colors.lightGrey,
            backgroundColor: utils.colors.white,
          }}>
          <View className="items-end mb-4">
            <View
              className="px-4 py-2 rounded-full"
              style={{backgroundColor: utils.colors.green}}>
              <Text
                className="text-xs font-semibold"
                style={{color: utils.colors.white}}>
                Live Auction
              </Text>
            </View>
          </View>

          <View className="items-center">
            <View
              className="rounded-2xl"
              style={{
                width: 170,
                height: 190,
                backgroundColor: utils.colors.lightGrey,
              }}
            />
          </View>

          <View className="mt-6">
            <Text
              className="text-xl font-bold"
              style={{color: utils.colors.black}}>
              Apple iPhone 14 Pro Max
            </Text>

            <Text
              className="text-lg mt-1"
              style={{color: utils.colors.grey}}>
              256GB Deep Purple
            </Text>
          </View>

          <View className="flex-row justify-between mt-8">
            <View>
              <Text
                className="text-base"
                style={{color: utils.colors.grey}}>
                Starting Price
              </Text>

              <Text
                className="text-3xl font-bold mt-2"
                style={{color: utils.colors.black}}>
                ₹45,000
              </Text>
            </View>

            <View>
              <Text
                className="text-base"
                style={{color: utils.colors.grey}}>
                Reserve Price
              </Text>

              <Text
                className="text-3xl font-bold mt-2"
                style={{color: utils.colors.black}}>
                ₹60,000
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between mt-8">
            <View>
              <Text
                className="text-base"
                style={{color: utils.colors.grey}}>
                Duration
              </Text>

              <Text
                className="text-lg font-semibold mt-2"
                style={{color: utils.colors.black}}>
                3 Days
              </Text>
            </View>

            <View>
              <Text
                className="text-base"
                style={{color: utils.colors.grey}}>
                Bids
              </Text>

              <Text
                className="text-lg font-semibold mt-2"
                style={{color: utils.colors.black}}>
                6 Bids
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="rounded-xl items-center py-4 mt-12"
          style={{backgroundColor: utils.colors.theme_color}}
          onPress={handleSave}
          >
          <Text
            className="text-lg font-bold"
            style={{color: utils.colors.white}}>
            Publish Auction
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}