import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Package,
} from 'lucide-react-native';
import utils from '../../utils';

const OrderDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <View className="pt-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-10 h-10 rounded-full items-center justify-center">
            <ArrowLeft
              size={25}
              color={utils.colors.black}
            />
          </TouchableOpacity>
        </View>

        <View className="mt-5">
          <utils.components.Header label="Order Details" />

          <View className="flex-row items-center justify-between mt-5">
            <View>
              <Text
                className="text-lg font-bold"
                style={{color: utils.colors.black}}>
                Order #ORD123456
              </Text>

              <Text
                className="mt-1"
                style={{color: utils.colors.grey}}>
                Placed on 20 May 2024
              </Text>
            </View>

            <View
              className="px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: '#E9F9F0',
                borderColor: utils.colors.green,
                borderWidth: 1,
              }}>
              <Text
                className="font-bold"
                style={{color: utils.colors.green}}>
                Confirmed
              </Text>
            </View>
          </View>

          <View
            className="border rounded-2xl mt-6 p-4"
            style={{borderColor: utils.colors.lightGrey}}>
            <View className="flex-row">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1592286927505-2fdc2d2f1b17',
                }}
                className="w-20 h-20 rounded-xl"
                resizeMode="cover"
              />

              <View className="flex-1 ml-4">
                <Text
                  className="text-base font-bold"
                  style={{color: utils.colors.black}}>
                  iPhone 14 Pro Max 256GB
                </Text>

                <Text
                  className="text-base font-bold mt-1"
                  style={{color: utils.colors.black}}>
                  Deep Purple
                </Text>

                <Text
                  className="text-lg font-bold mt-2"
                  style={{color: utils.colors.theme_color}}>
                  ₹45,500
                </Text>

                <Text
                  className="mt-1"
                  style={{color: utils.colors.grey}}>
                  Quantity: 1
                </Text>
              </View>
            </View>
          </View>

          <View
            className="border-b mt-7 mb-5"
            style={{borderColor: utils.colors.lightGrey}}
          />

          <Text
            className="text-lg font-bold"
            style={{color: utils.colors.black}}>
            Order Summary
          </Text>

          <View className="mt-4">
            <View className="flex-row justify-between mb-3">
              <Text style={{color: utils.colors.grey}}>Item Price</Text>

              <Text
                className="font-bold"
                style={{color: utils.colors.black}}>
                ₹45,500
              </Text>
            </View>

            <View className="flex-row justify-between mb-3">
              <Text style={{color: utils.colors.grey}}>Shipping Charge</Text>

              <Text
                className="font-bold"
                style={{color: utils.colors.black}}>
                ₹200
              </Text>
            </View>

            <View className="flex-row justify-between mt-2">
              <Text
                className="font-bold"
                style={{color: utils.colors.black}}>
                Total Amount
              </Text>

              <Text
                className="font-bold"
                style={{color: utils.colors.theme_color}}>
                ₹45,700
              </Text>
            </View>
          </View>

          <View
            className="border-b mt-7 mb-5"
            style={{borderColor: utils.colors.lightGrey}}
          />

          <View className="flex-row items-center">
            <MapPin
              size={22}
              color={utils.colors.theme_color}
            />

            <Text
              className="text-lg font-bold ml-2"
              style={{color: utils.colors.black}}>
              Shipping Address
            </Text>
          </View>

          <View className="mt-4">
            <Text
              className="font-bold text-base"
              style={{color: utils.colors.black}}>
              John Doe
            </Text>

            <Text
              className="mt-1"
              style={{color: utils.colors.grey}}>
              123, MG Road, Mumbai, India
            </Text>

            <Text
              className="mt-1"
              style={{color: utils.colors.grey}}>
              Pin: 123456
            </Text>

            <Text
              className="mt-1"
              style={{color: utils.colors.grey}}>
              +91 98765 43210
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('TrackOrder')}
            className="rounded-xl py-4 mt-8"
            style={{backgroundColor: utils.colors.theme_color}}>
            <Text
              className="text-center text-lg font-bold"
              style={{color: utils.colors.white}}>
              Track Order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;