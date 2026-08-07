import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ArrowLeft,
  Check,
  Package,
  Truck,
} from 'lucide-react-native';
import utils from '../../utils';

const TRACKING_DATA = [
  {
    title: 'Order Confirmed',
    date: '20 May 2024, 10:30 AM',
    completed: true,
  },
  {
    title: 'Payment Successful',
    date: '20 May 2024, 10:32 AM',
    completed: true,
  },
  {
    title: 'Seller Processing',
    date: '20 May 2024, 02:15 PM',
    completed: true,
  },
  {
    title: 'Shipped',
    date: '21 May 2024, 11:45 AM',
    completed: true,
  },
  {
    title: 'Out for Delivery',
    date: '23 May 2024, 02:20 PM',
    completed: true,
  },
  {
    title: 'Delivered',
    date: 'Expected: 23 May 2024',
    completed: false,
  },
];

const TrackOrderScreen = ({navigation}) => {
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
          <utils.components.Header label="Track Order" />

          <View
            className="border rounded-2xl mt-6 p-5"
            style={{borderColor: utils.colors.lightGrey}}>
            <View className="flex-row items-center">
              <View
                className="h-12 w-12 rounded-full items-center justify-center"
                style={{
                  backgroundColor: utils.colors.theme_color,
                }}>
                <Package
                  size={24}
                  color={utils.colors.white}
                />
              </View>

              <View className="ml-4">
                <Text
                  className="text-lg font-bold"
                  style={{color: utils.colors.black}}>
                  Order #ORD123456
                </Text>

                <Text
                  className="mt-1"
                  style={{color: utils.colors.grey}}>
                  iPhone 14 Pro Max 256GB
                </Text>
              </View>
            </View>

            <View className="mt-8">
              {TRACKING_DATA.map((item, index) => (
                <View
                  key={item.title}
                  className="flex-row"
                  style={{
                    minHeight:
                      index === TRACKING_DATA.length - 1 ? 70 : 88,
                  }}>
                  <View className="items-center">
                    <View
                      className="h-9 w-9 rounded-full items-center justify-center"
                      style={{
                        backgroundColor: item.completed
                          ? utils.colors.theme_color
                          : utils.colors.white,
                        borderWidth: 2,
                        borderColor: utils.colors.theme_color,
                      }}>
                      {item.completed ? (
                        <Check
                          size={19}
                          color={utils.colors.white}
                        />
                      ) : (
                        <View
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            backgroundColor:
                              utils.colors.theme_color,
                          }}
                        />
                      )}
                    </View>

                    {index !== TRACKING_DATA.length - 1 && (
                      <View
                        className="flex-1 w-0.5"
                        style={{
                          backgroundColor: item.completed
                            ? utils.colors.theme_color
                            : utils.colors.lightGrey,
                        }}
                      />
                    )}
                  </View>

                  <View className="ml-4 flex-1 pb-5">
                    <Text
                      className="text-base font-bold"
                      style={{color: utils.colors.black}}>
                      {item.title}
                    </Text>

                    <Text
                      className="mt-1"
                      style={{color: utils.colors.grey}}>
                      {item.date}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View
            className="border rounded-2xl p-4 mt-5"
            style={{borderColor: utils.colors.lightGrey}}>
            <View className="flex-row items-center">
              <Truck
                size={23}
                color={utils.colors.theme_color}
              />

              <View className="ml-3 flex-1">
                <Text
                  className="font-bold"
                  style={{color: utils.colors.black}}>
                  Delivery Partner
                </Text>

                <Text
                  className="mt-1"
                  style={{color: utils.colors.grey}}>
                  Your order is on the way
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackOrderScreen;