import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ArrowLeft,
  Bell,
  Heart,
  MessageCircle,
  Clock3,
} from 'lucide-react-native';
import utils from '../../utils';

export default function AuctionDetailsScreen({navigation, route}) {
  const auction = route?.params?.auction || {
    title: 'iPhone 14 Pro Max 256GB',
    subtitle: 'Deep Purple',
    price: 45000,
    highestBidLabel: 'Highest Bid',
    bids: 32,
    time: '02h 15m 30s',
    marketPrice: 129900,
    discount: 65,
    condition: 'Like New',
    location: 'Mumbai, India',
    image: utils.assets.onboarding_bid,
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}>
        <View className="px-5 pt-2">
          <View className="flex-row items-center justify-between mb-4">
            <View/>

            <View className="items-center justify-start ml-2">
  <TouchableOpacity
    className="h-10 w-10 items-center justify-center"
    onPress={() => {}}
  >
    <Bell
      size={24}
      color={utils.colors.theme_color}
    />
  </TouchableOpacity>

  <TouchableOpacity
    className="h-10 w-10 items-center justify-center mt-1"
    onPress={() => {}}
  >
    <Heart
      size={24}
      color={utils.colors.gray}
    />
  </TouchableOpacity>
</View>

          </View>

          <View
            className="w-full rounded-3xl items-center justify-center overflow-hidden"
            style={{
              height: 260,
              
            }}>
            <Image
              source={auction.image}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>

          <View className="mt-5">
            <Text
              className="text-2xl font-black"
              style={{color: utils.colors.black}}>
              {auction.title}
            </Text>

            <Text
              className="text-lg mt-1 font-semibold"
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
              </View>

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.grey}}>
                {auction.highestBidLabel || 'Highest Bid'}
              </Text>

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.grey}}>
                {auction.bids} Bids
              </Text>
            </View>

            <View className="flex-row items-center mt-4">
              <Clock3
                size={17}
                color={utils.colors.red}
              />

              <Text
                className="text-lg font-bold ml-2"
                style={{color: utils.colors.red}}>
                {auction.time}
              </Text>
            </View>

            <View className="mt-4">
              <Text
                className="text-base"
                style={{color: utils.colors.grey}}>
                Market Price{' '}
                <Text
                  style={{
                    color: utils.colors.grey,
                  }}>
                  ₹{auction.marketPrice.toLocaleString('en-IN')}
                </Text>{' '}
                <Text
                  style={{color: utils.colors.green}}
                  className="font-bold">
                  ({auction.discount}% off)
                </Text>
              </Text>
            </View>

            <Text
              className="text-lg font-black mt-6"
              style={{color: utils.colors.black}}>
              Product Details
            </Text>

            <View className="mt-3">
              <View className="flex-row items-center justify-between py-3">
                <Text
                  className="text-base font-semibold"
                  style={{color: utils.colors.grey}}>
                  Condition
                </Text>

                <Text
                  className="text-base font-semibold"
                  style={{color: utils.colors.black}}>
                  {auction.condition}
                </Text>
              </View>

              <View className="flex-row items-center justify-between py-3">
                <Text
                  className="text-base font-semibold"
                  style={{color: utils.colors.grey}}>
                  Location
                </Text>

                <Text
                  className="text-base font-semibold"
                  style={{color: utils.colors.black}}>
                  {auction.location}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center mt-8">
              <TouchableOpacity
                activeOpacity={0.8}
                className="w-14 h-14 rounded-2xl items-center justify-center border"
                style={{borderColor: utils.colors.lightGrey}}>
                <Heart
                  size={22}
                  color={utils.colors.black}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                className="flex-1 h-14 rounded-2xl items-center justify-center border mx-3"
                style={{borderColor: utils.colors.lightGrey}}>
               
                <Text
                  className="text-sm font-bold mt-1"
                  style={{color: utils.colors.black}}>
                  Chat
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                className="flex-[1.6] h-14 rounded-2xl items-center justify-center"
                style={{backgroundColor: utils.colors.theme_color}}
                onPress={() => navigation.navigate('LiveAuction')}>
                <Text
                  className="text-base font-bold"
                  style={{color: utils.colors.white}}>
                  Place Bid
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
