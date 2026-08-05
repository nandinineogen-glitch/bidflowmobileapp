import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils';
import { Navigation } from 'lucide-react-native';

const DATA = [
  {
    id: '1',
    name: 'Rahul Sharma',
    amount: '₹62,500',
    time: 'Just now',
    url: utils.assets.profile
  },
  {
    id: '2',
    name: 'Neha Patel',
    amount: '₹61,000',
    time: '30s ago',
    url: utils.assets.profile
  },
  {
    id: '3',
    name: 'Ankit Verma',
    amount: '₹60,500',
    time: '1m ago',
    url: utils.assets.profile
  },
];

export default function LiveAuctionMonitorScreen({ navigation }) {
  const handleSave = () => {
    navigation.navigate('BidHistory')
  }
  const renderItem = ({ item }) => (
    <View className="flex-row items-center justify-between py-3">

      <View className="flex-row items-center">

        <View
          className="w-10 h-10 rounded-full items-center justify-center"
          style={{ backgroundColor: utils.colors.lightGrey }}
        >
           <Image
            source={item.url}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>

        <Text
          className="ml-3 text-base font-semibold"
          style={{ color: utils.colors.black }}
        >
          {item.name}
        </Text>

      </View>

      <View className="items-end">

        <Text
          className="font-bold text-base"
          style={{ color: utils.colors.black }}
        >
          {item.amount}
        </Text>

        <Text
          className="text-xs"
          style={{ color: utils.colors.grey }}
        >
          {item.time}
        </Text>

      </View>

    </View>
  );

  return (

    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: utils.colors.theme_color }}
    >

      <View className="px-6 pt-3">

        <View className="flex-row justify-between items-center">

          <View>

            <Text
              className="text-2xl font-bold"
              style={{ color: utils.colors.white }}
            >
              Live Auction
            </Text>

            <View className="flex-row items-center mt-2">

              <View className="w-3 h-3 rounded-full bg-green-500" />

              <Text
                className="ml-2 font-semibold"
                style={{ color: utils.colors.white }}
              >
                Live
              </Text>

            </View>

          </View>
        </View>
        <View className="h-48 items-center justify-center">
         <Image
            source={utils.assets.profile}
            style={{
              width: 150,
              height: 168,
            }}
          />
        </View>
      </View>
      <View
        className="flex-1 rounded-t-[35px] px-6 pt-8"
        style={{ backgroundColor: utils.colors.white }}
      >
              <Text
          className="text-3xl font-bold"
          style={{ color: utils.colors.black }}
        >
          Apple iPhone 14 Pro Max
        </Text>

        <Text
          className="text-xl font-semibold mt-1"
          style={{ color: utils.colors.black }}
        >
          256GB Deep Purple
        </Text>

        <View className="flex-row justify-between mt-10">

          <View className="flex-1">

            <Text
              className="text-base"
              style={{ color: utils.colors.grey }}
            >
              Starting Price
            </Text>

            <Text
              className="text-3xl font-bold mt-2"
              style={{ color: utils.colors.black }}
            >
              ₹45,000
            </Text>

          </View>

          <View className="flex-1 items-end">

            <Text
              className="text-base"
              style={{ color: utils.colors.grey }}
            >
              Highest Bid
            </Text>

            <Text
              className="text-3xl font-bold mt-2"
              style={{ color: utils.colors.black }}
            >
              ₹62,500
            </Text>

          </View>

        </View>

        <View className="flex-row justify-between mt-10">

          <View className="flex-1">

            <Text
              className="text-base"
              style={{ color: utils.colors.grey }}
            >
              Ends In
            </Text>

            <Text
              className="text-2xl font-bold mt-2"
              style={{ color: utils.colors.black }}
            >
              02h 15m 30s
            </Text>

          </View>

          <View className="flex-1 items-end">

            <Text
              className="text-base"
              style={{ color: utils.colors.grey }}
            >
              Total Bids
            </Text>

            <Text
              className="text-2xl font-bold mt-2"
              style={{ color: utils.colors.black }}
            >
              32
            </Text>

          </View>

        </View>

        <Text
          className="text-xl font-bold mt-10 mb-3"
          style={{ color: utils.colors.black }}
        >
          Recent Bids
        </Text>

        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        <TouchableOpacity
          className="rounded-xl py-4 mb-6 mt-4"
          style={{ backgroundColor: utils.colors.theme_color }}
        >
          <Text
            className="text-center text-xl font-bold"
            style={{ color: utils.colors.white }}
            onPress={handleSave}
          >
            View All Bids
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}