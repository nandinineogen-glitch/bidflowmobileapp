
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Clock3, Users} from 'lucide-react-native';
import utils from '../../utils';

const BIDS = [
  {
    id: '1',
    name: 'Rahul Sharma',
    amount: '₹62,500',
    time: 'Just now',
    image: utils.assets.profile,
  },
  {
    id: '2',
    name: 'Neha Patel',
    amount: '₹61,000',
    time: '30s ago',
    image: utils.assets.profile,
  },
  {
    id: '3',
    name: 'Ankit Verma',
    amount: '₹60,500',
    time: '1m ago',
    image: utils.assets.profile,
  },
];

export default function LiveAuctionScreen({navigation, route}) {
  const auction = route?.params?.auction || {
    title: 'iPhone 14 Pro Max 256GB',
    subtitle: 'Deep Purple',
    price: 45000,
    highestBidLabel: 'Highest Bid',
    bids: 32,
    time: '02h 15m 30s',
    image: utils.assets.onboarding_bid,
  };

  const renderBid = ({item}) => {
    return (
      <View className="flex-row items-center justify-between py-3">
        <View className="flex-row items-center">
          <Image
            source={item.image}
            className="w-10 h-10 rounded-full"
          />

          <Text
            className="ml-3 text-base font-semibold"
            style={{color: utils.colors.black}}>
            {item.name}
          </Text>
        </View>

        <View className="items-end">
          <Text
            className="text-base font-bold"
            style={{color: utils.colors.black}}>
            {item.amount}
          </Text>

          <Text
            className="text-xs"
            style={{color: utils.colors.grey}}>
            {item.time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{paddingBottom: 30}}>
        <View className="px-5 pt-3">

          <View className="flex-row items-center justify-between mb-4">
            <View
              className="px-5 py-2 rounded-lg"
              style={{backgroundColor: utils.colors.red}}>
              <Text
                className="font-bold"
                style={{color: utils.colors.white}}>
                Live
              </Text>
            </View>

            <TouchableOpacity
              className="flex-row items-center justify-center border rounded-lg px-3 py-2"
              style={{borderColor: utils.colors.lightGrey}}>
              <Users
                size={18}
                color={utils.colors.grey}
              />

              <Text
                className="ml-2"
                style={{color: utils.colors.black}}>
                142
              </Text>
            </TouchableOpacity>
          </View>

          <View
            className="w-full rounded-3xl items-center justify-center"
            style={{
              height: 200,
              backgroundColor: utils.colors.white,
            }}>
            <Image
              source={auction.image}
              resizeMode="contain"
              className="w-[70%] h-[90%]"
            />
          </View>

          <Text
            className="text-2xl font-black mt-5"
            style={{color: utils.colors.black}}>
            {auction.title}
          </Text>

          <Text
            className="text-lg font-semibold mt-1"
            style={{color: utils.colors.black}}>
            {auction.subtitle}
          </Text>

          <View className="flex-row items-end justify-between mt-4">
            <View>
              <Text
                className="text-2xl font-black"
                style={{color: utils.colors.black}}>
                ₹{auction.price.toLocaleString('en-IN')}
              </Text>

              <Text
                className="text-sm"
                style={{color: utils.colors.grey}}>
                {auction.highestBidLabel}
              </Text>
            </View>

            <Text
              className="text-sm"
              style={{color: utils.colors.grey}}>
              {auction.bids} Bids
            </Text>
          </View>

          <View className="flex-row items-center mt-4">
            <Clock3
              size={18}
              color={utils.colors.red}
            />

            <Text
              className="text-lg font-bold ml-2"
              style={{color: utils.colors.red}}>
              {auction.time}
            </Text>
          </View>

          <Text
            className="text-xl font-bold mt-10 mb-3"
            style={{color: utils.colors.black}}>
            Bids History
          </Text>

          <FlatList
            data={BIDS}
            keyExtractor={item => item.id}
            renderItem={renderBid}
            scrollEnabled={false}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            className="h-14 rounded-2xl items-center justify-center mt-6"
            style={{backgroundColor: utils.colors.theme_color}}
            onPress={() => navigation.navigate('BidSuccess')}>
            <Text
              className="text-base font-bold"
              style={{color: utils.colors.white}}>
              Place Bid
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
