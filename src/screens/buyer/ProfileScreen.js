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
  ShoppingBag,
  Gavel,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  CircleHelp,
  Settings,
  ChevronRight,
} from 'lucide-react-native';
import utils from '../../utils';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: utils.colors.white,
      }}>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>

        <View className="mt-5">

          {/* PROFILE */}
          <View className="mt-6 p-5">

            <View className="flex-row items-center">

              <View
                className="h-16 w-16 rounded-full items-center justify-center"
                style={{
                  backgroundColor: utils.colors.lightGrey,
                }}>

                <Image
                  source={utils.assets.profile}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 54,
                  }}
                />

              </View>

              <View className="ml-4 flex-1">

                <Text
                  className="text-xl font-bold"
                  style={{
                    color: utils.colors.black,
                  }}>
                  John Doe
                </Text>

                <Text
                  className="mt-1"
                  style={{
                    color: utils.colors.grey,
                  }}>
                  john.doe@email.com
                </Text>

              </View>

              {/* NOTIFICATION */}
              <TouchableOpacity
                className="h-10 w-10 items-center justify-center"
                onPress={() => navigation.navigate('Notification')}>

                <Bell
                  size={24}
                  color={utils.colors.theme_color}
                />

              </TouchableOpacity>

            </View>

          </View>

          {/* MENU */}
          <View
            className="border rounded-2xl mt-5 overflow-hidden"
            style={{
              borderColor: utils.colors.lightGrey,
            }}>

            {/* MY ORDERS */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Orders')}
              className="flex-row items-center px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: utils.colors.lightGrey,
              }}>

              <View className="w-10 items-center">

                <ShoppingBag
                  size={21}
                  color={utils.colors.grey}
                />

              </View>

              <Text
                className="flex-1 text-base font-medium ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                My Orders
              </Text>

              <ChevronRight
                size={20}
                color={utils.colors.grey}
              />

            </TouchableOpacity>

            {/* MY BIDS */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Mybids')}
              className="flex-row items-center px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: utils.colors.lightGrey,
              }}>

              <View className="w-10 items-center">

                <Gavel
                  size={21}
                  color={utils.colors.grey}
                />

              </View>

              <Text
                className="flex-1 text-base font-medium ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                My Bids
              </Text>

              <ChevronRight
                size={20}
                color={utils.colors.grey}
              />

            </TouchableOpacity>

            {/* WATCHLIST */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Watchlist')}
              className="flex-row items-center px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: utils.colors.lightGrey,
              }}>

              <View className="w-10 items-center">

                <Heart
                  size={21}
                  color={utils.colors.grey}
                />

              </View>

              <Text
                className="flex-1 text-base font-medium ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                Watchlist
              </Text>

              <ChevronRight
                size={20}
                color={utils.colors.grey}
              />

            </TouchableOpacity>

            {/* ADDRESS BOOK */}
            <TouchableOpacity
              onPress={() => navigation.navigate('AddressScreen')}
              className="flex-row items-center px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: utils.colors.lightGrey,
              }}>

              <View className="w-10 items-center">

                <MapPin
                  size={21}
                  color={utils.colors.grey}
                />

              </View>

              <Text
                className="flex-1 text-base font-medium ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                Address Book
              </Text>

              <ChevronRight
                size={20}
                color={utils.colors.grey}
              />

            </TouchableOpacity>

            {/* PAYMENT METHODS */}
            <TouchableOpacity
              onPress={() => navigation.navigate('BankPayout')}
              className="flex-row items-center px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: utils.colors.lightGrey,
              }}>

              <View className="w-10 items-center">

                <CreditCard
                  size={21}
                  color={utils.colors.grey}
                />

              </View>

              <Text
                className="flex-1 text-base font-medium ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                Payment Methods
              </Text>

              <ChevronRight
                size={20}
                color={utils.colors.grey}
              />

            </TouchableOpacity>

            {/* NOTIFICATION */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
              className="flex-row items-center px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: utils.colors.lightGrey,
              }}>

              <View className="w-10 items-center">

                <Bell
                  size={21}
                  color={utils.colors.grey}
                />

              </View>

              <Text
                className="flex-1 text-base font-medium ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                Notification
              </Text>

              <ChevronRight
                size={20}
                color={utils.colors.grey}
              />

            </TouchableOpacity>

            {/* HELP & SUPPORT */}
            <TouchableOpacity
              onPress={() => navigation.navigate('HelpSupport')}
              className="flex-row items-center px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: utils.colors.lightGrey,
              }}>

              <View className="w-10 items-center">

                <CircleHelp
                  size={21}
                  color={utils.colors.grey}
                />

              </View>

              <Text
                className="flex-1 text-base font-medium ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                Help & Support
              </Text>

              <ChevronRight
                size={20}
                color={utils.colors.grey}
              />

            </TouchableOpacity>

            {/* SETTINGS */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
              className="flex-row items-center px-4 py-4">

              <View className="w-10 items-center">

                <Settings
                  size={21}
                  color={utils.colors.grey}
                />

              </View>

              <Text
                className="flex-1 text-base font-medium ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                Settings
              </Text>

              <ChevronRight
                size={20}
                color={utils.colors.grey}
              />

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default ProfileScreen;