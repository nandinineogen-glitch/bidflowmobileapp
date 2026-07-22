import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils';

const DATA = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    currentBid: '₹80,000',
    image: utils.assets.onboarding_bid,
  },
  {
    id: 2,
    title: 'MacBook Air M2',
    currentBid: '₹65,000',
    image: utils.assets.onboarding_bid,
  },
  {
    id: 3,
    title: 'Apple Watch Ultra',
    currentBid: '₹40,000',
    image: utils.assets.onboarding_bid,
  },
  {
    id: 4,
    title: 'Sony PS5',
    currentBid: '₹45,000',
    image: utils.assets.onboarding_bid,
  },
];

export default function BuyerHomeScreen() {
  const renderItem = ({ item }) => (
    <View
      className="mx-5 mb-4 border rounded-xl p-4"
      style={{ borderColor: utils.colors.lightGrey }}
    >
      <View className="flex-row">
        <Image
          source={item.image}
          style={{ width: 80, height: 80 }}
        />

        <View className="flex-1 ml-4 justify-center">
          <Text
            className="text-lg font-bold"
            style={{ color: utils.colors.black }}
          >
            {item.title}
          </Text>

          <Text
            className="mt-2"
            style={{ color: utils.colors.grey }}
          >
            Current Bid
          </Text>

          <Text
            className="text-xl font-bold mt-1"
            style={{ color: utils.colors.blue }}
          >
            {item.currentBid}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="rounded-xl py-3 mt-4"
        style={{ backgroundColor: utils.colors.blue }}
      >
        <Text
          className="text-center font-bold"
          style={{ color: utils.colors.white }}
        >
          Place Bid
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: utils.colors.white }}
    >
      <View className="px-5 pt-6 pb-5">
        <Text
          className="text-xl"
          style={{ color: utils.colors.grey }}
        >
          Good Morning,
        </Text>

        <Text
          className="text-3xl font-bold mt-1"
          style={{ color: utils.colors.black }}
        >
          Buyer
        </Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
}