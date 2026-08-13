import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import utils from '../../utils';

export default function BidSuccess() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 30,
        }}>

        <View className="px-5 pt-2">

          <View
            className="w-full rounded-3xl items-center justify-center overflow-hidden"
            style={{
              height: 300,
            }}>

            <Image
              source={utils.assets.gavel}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
              }}
            />

          </View>

          <View className="mt-5">

            <Text
              className="text-3xl text-center font-black"
              style={{color: utils.colors.theme_color}}>
              Congratulations!
            </Text>

            <Text
              className="text-2xl mt-4 text-center"
              style={{color: utils.colors.gray}}>
              You are now the highest bidder.
            </Text>

            <Text
              className="mt-12 ml-6"
              style={{color: utils.colors.gray}}>
              Your Bid Amount
            </Text>

            <Text
              className="text-2xl mt-2 font-black ml-6"
              style={{color: utils.colors.black}}>
              ₹45000
            </Text>

            <Text
              className="mt-10 ml-6"
              style={{color: utils.colors.gray}}>
              Auction ends in
            </Text>

            <Text
              className="text-2xl mt-2 font-black ml-6"
              style={{color: utils.colors.black}}>
              02h 15m 30s
            </Text>

            <View className="flex-row items-center mt-8">

              <TouchableOpacity
                className="flex-[1.6] h-14 w-40 mt-28 rounded-2xl items-center justify-center"
                style={{
                  backgroundColor: utils.colors.theme_color,
                }}
                onPress={() =>
                  navigation.navigate('BuyerBottomTab', {
                    screen: 'Mybids',
                  })
                }>

                <Text
                  className="font-bold"
                  style={{color: utils.colors.white}}>
                  View Auction
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}