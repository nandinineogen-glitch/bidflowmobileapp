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
  Bell,
  Heart,
  Clock3,
} from 'lucide-react-native';
import utils from '../../utils';

export default function AuctionDetailsScreen({navigation}) {
  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>

        <View className="px-5 pt-2">

          {/* TOP ICONS */}
          <View className="flex-row items-center justify-between mb-4">

            <View />

            <View className="items-center justify-start ml-2">

              <TouchableOpacity
                className="h-10 w-10 items-center justify-center"
                onPress={() => navigation.navigate('Notification')}>

                <Bell
                  size={24}
                  color={utils.colors.theme_color}
                />

              </TouchableOpacity>

              <TouchableOpacity
                className="h-10 w-10 items-center justify-center mt-1">

                <Heart
                  size={24}
                  color={utils.colors.gray}
                />

              </TouchableOpacity>

            </View>

          </View>

          {/* PRODUCT IMAGE */}
          <View
            className="w-full rounded-3xl items-center justify-center overflow-hidden"
            style={{
              height: 260,
            }}>

            <Image
              source={utils.assets.onboarding_bid}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
              }}
            />

          </View>

          {/* PRODUCT DETAILS */}
          <View className="mt-5">

            <Text
              className="text-2xl font-black"
              style={{color: utils.colors.black}}>
              iPhone 14 Pro Max 256GB
            </Text>

            <Text
              className="text-lg mt-1 font-semibold"
              style={{color: utils.colors.black}}>
              Deep Purple
            </Text>

            {/* PRICE */}
            <View className="flex-row items-end justify-between mt-4">

              <Text
                className="text-2xl font-black"
                style={{color: utils.colors.black}}>
                ₹45,000
              </Text>

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.grey}}>
                Highest Bid
              </Text>

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.grey}}>
                32 Bids
              </Text>

            </View>

            {/* TIMER */}
            <View className="flex-row items-center mt-4">

              <Clock3
                size={17}
                color={utils.colors.red}
              />

              <Text
                className="text-lg font-bold ml-2"
                style={{color: utils.colors.red}}>
                02h 15m 30s
              </Text>

            </View>

            {/* MARKET PRICE */}
            <View className="mt-4">

              <Text
                className="text-base"
                style={{color: utils.colors.grey}}>

                Market Price{' '}

                <Text
                  style={{
                    color: utils.colors.grey,
                  }}>
                  ₹1,29,900
                </Text>{' '}

                <Text
                  style={{color: utils.colors.green}}
                  className="font-bold">
                  (65% off)
                </Text>

              </Text>

            </View>

            {/* PRODUCT DETAILS */}
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
                  Like New
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
                  Mumbai, India
                </Text>

              </View>

            </View>

            {/* BOTTOM BUTTONS */}
            <View className="flex-row items-center mt-8">

              {/* HEART */}
              <TouchableOpacity
                className="w-14 h-14 rounded-2xl items-center justify-center border"
                style={{
                  borderColor: utils.colors.lightGrey,
                }}>

                <Heart
                  size={22}
                  color={utils.colors.black}
                />

              </TouchableOpacity>

              {/* CHAT */}
              <TouchableOpacity
                className="flex-1 h-14 rounded-2xl items-center justify-center border mx-3"
                style={{
                  borderColor: utils.colors.lightGrey,
                }}>

                <Text
                  className="text-sm font-bold mt-1"
                  style={{color: utils.colors.black}}>
                  Chat
                </Text>

              </TouchableOpacity>

              {/* PLACE BID */}
              <TouchableOpacity
                className="flex-[1.6] h-14 rounded-2xl items-center justify-center"
                style={{
                  backgroundColor: utils.colors.theme_color,
                }}
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