import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ArrowLeft,
  User,
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


const MENU_DATA = [
  {
    title: 'My Orders',
    icon: ShoppingBag,
    screen: 'Orders',
  },
  {
    title: 'My Bids',
    icon: Gavel,
    screen: 'MyBidsScreen',
  },
  {
    title: 'Watchlist',
    icon: Heart,
    screen: 'Watchlist',
  },
  {
    title: 'Address Book',
    icon: MapPin,
    screen: 'AddressBook',
  },
  {
    title: 'Payment Methods',
    icon: CreditCard,
    screen: 'PaymentMethods',
  },
  {
    title: 'Notifications',
    icon: Bell,
    screen: 'Notifications',
  },
  {
    title: 'Help & Support',
    icon: CircleHelp,
    screen: 'HelpSupport',
  },
  {
    title: 'Settings',
    icon: Settings,
    screen: 'Settings',
  },
];

const ProfileScreen = ({navigation}) => {
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
      
                    
         
        <View className="mt-5">
         

          <View
            className=" mt-6 p-5"
           >
            <View className="flex-row items-center">
              <View
                className="h-16 w-16 rounded-full items-center justify-center"
                style={{
                  backgroundColor: utils.colors.lightGrey,
                }}>
                <Image
                 style={{
          width: 80,
          height: 80,
          borderRadius: 54,
         
        }}
                  source={utils.assets.profile}

                />
              </View>

              <View className="ml-4 flex-1">
                <Text
                  className="text-xl font-bold"
                  style={{color: utils.colors.black}}>
                  John Doe
                </Text>

                <Text
                  className="mt-1"
                  style={{color: utils.colors.grey}}>
                  john.doe@email.com
                </Text>
              </View>
               <View className="items-center justify-start ml-2">
  <TouchableOpacity
    className="h-10 w-10 items-center justify-center"
    onPress={() => navigation.navigate('Notification')}
  >
    <Bell
      size={24}
      color={utils.colors.theme_color}
    />
  </TouchableOpacity>
</View>
    
            </View>
          </View>

          <View
            className="border rounded-2xl mt-5 overflow-hidden"
            style={{borderColor: utils.colors.lightGrey}}>
            {MENU_DATA.map((item, index) => {
              const Icon = item.icon;

              return (
                <TouchableOpacity
                  key={item.title}
                  onPress={() => navigation.navigate(item.screen)}
                  className="flex-row items-center px-4 py-4"
                  style={{
                    borderBottomWidth:
                      index === MENU_DATA.length - 1 ? 0 : 1,
                    borderBottomColor: utils.colors.lightGrey,
                  }}>
                  <View className="w-10 items-center">
                    <Icon
                      size={21}
                      color={utils.colors.grey}
                    />
                  </View>

                  <Text
                    className="flex-1 text-base font-medium ml-2"
                    style={{color: utils.colors.black}}>
                    {item.title}
                  </Text>

                  <ChevronRight
                    size={20}
                    color={utils.colors.grey}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;