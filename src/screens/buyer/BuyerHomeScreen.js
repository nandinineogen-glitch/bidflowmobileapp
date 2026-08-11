
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Search, Clock3} from 'lucide-react-native';
import utils from '../../utils';

const CATEGORIES = [
  {
    id: '1',
    name: 'Electronics',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '2',
    name: 'Watches',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '3',
    name: 'Fashion',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '4',
    name: 'Phones',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '5',
    name: 'Laptops',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '6',
    name: 'Cameras',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '7',
    name: 'Audio',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '8',
    name: 'Home',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '9',
    name: 'Gaming',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '10',
    name: 'Vehicles',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '11',
    name: 'Collectibles',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '12',
    name: 'More',
    image: utils.assets.onboarding_bid,
  },
];

const AUCTIONS = [
  {
    id: '1',
    title: 'iPhone 14 Pro Max',
    subtitle: '256GB Deep Purple',
    price: 45000,
    bids: 32,
    time: '02h 15m 30s',
    category: 'Electronics',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '2',
    title: 'MacBook Air M2',
    subtitle: '13-inch Apple Laptop',
    price: 78500,
    bids: 18,
    time: '01h 45m 10s',
    category: 'Laptops',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '3',
    title: 'Samsung Galaxy S23',
    subtitle: '256GB Phantom Black',
    price: 34000,
    bids: 24,
    time: '03h 10m 20s',
    category: 'Phones',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '4',
    title: 'Premium Smart Watch',
    subtitle: 'Series 8 GPS',
    price: 12500,
    bids: 15,
    time: '04h 20m 15s',
    category: 'Watches',
    image: utils.assets.onboarding_bid,
  },
];

const BuyerHomeScreen = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getAuctions = () => {
    if (selectedCategory === 'All') {
      return AUCTIONS;
    }

    return AUCTIONS.filter(
      item => item.category === selectedCategory,
    );
  };

  const selectCategory = category => {
    if (selectedCategory === category) {
      setSelectedCategory('All');
    } else {
      setSelectedCategory(category);
    }
  };

  const formatPrice = price => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const renderCategory = ({item}) => {
    const isSelected = selectedCategory === item.name;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => selectCategory(item.name)}
        className="items-center mr-5">

        <View
          className="w-14 h-14 rounded-2xl items-center justify-center"
          style={{
            backgroundColor: isSelected
              ? utils.colors.theme_color
              : '#F7F7FA',
          }}>

          <Image
            source={item.image}
            className="w-10 h-10"
            resizeMode="contain"
          />

        </View>

        <Text
          className="text-[11px] font-semibold mt-2"
          style={{
            color: isSelected
              ? utils.colors.theme_color
              : utils.colors.grey,
          }}>
          {item.name}
        </Text>

      </TouchableOpacity>
    );
  };

  const renderAuction = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('AuctionDetails', {
            auction: item,
          })
        }
        className="flex-row items-center py-4 border-b"
        style={{
          borderColor: utils.colors.lightGrey,
        }}>

        <View className="w-24 h-24 rounded-2xl bg-gray-50 items-center justify-center overflow-hidden">

          <Image
            source={item.image}
            className="w-full h-full"
            resizeMode="contain"
          />

        </View>

        <View className="flex-1 ml-4">

          <Text
            numberOfLines={1}
            className="text-[15px] font-bold"
            style={{
              color: utils.colors.black,
            }}>
            {item.title}
          </Text>

          <Text
            numberOfLines={1}
            className="text-xs mt-1"
            style={{
              color: utils.colors.grey,
            }}>
            {item.subtitle}
          </Text>

          <View className="flex-row items-center mt-2">

            <Text
              className="text-[15px] font-black"
              style={{
                color: utils.colors.black,
              }}>
              {formatPrice(item.price)}
            </Text>

            <Clock3
              size={13}
              color={utils.colors.red}
              style={{
                marginLeft: 12,
              }}
            />

            <Text
              className="text-xs font-bold ml-1"
              style={{
                color: utils.colors.red,
              }}>
              {item.time}
            </Text>

          </View>

          <Text
            className="text-xs mt-1"
            style={{
              color: utils.colors.grey,
            }}>
            {item.bids} Bids
          </Text>

        </View>

      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: utils.colors.white,
      }}>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={
          Platform.OS === 'ios' ? 'padding' : undefined
        }>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 30,
          }}>

          <View className="px-5 pt-4">

            <View className="flex-row items-center justify-between">

              <Text
                className="text-2xl font-black"
                style={{
                  color: utils.colors.black,
                }}>
                Hello, John 
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Profile')
                }
                className="w-12 h-12 rounded-full overflow-hidden">

                <Image
                  source={utils.assets.profile}
                  className="w-full h-full"
                  resizeMode="cover"
                />

              </TouchableOpacity>

            </View>

            <View
              className="flex-row items-center border rounded-xl mt-5 px-3"
              style={{
                borderColor: utils.colors.lightGrey,
              }}>

              <Search
                size={20}
                color={utils.colors.grey}
              />

              <TextInput
                placeholder="Search Auctions, Categories, Products"
                placeholderTextColor={utils.colors.grey}
                className="flex-1 ml-2 h-12"
                style={{
                  color: utils.colors.black,
                }}
              />

            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              className="h-28 rounded-2xl mt-5 px-5 flex-row items-center overflow-hidden"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>

              <View className="flex-1">

                <Text className="text-white text-xl font-black">
                  Live Auctions
                </Text>

                <Text className="text-white text-xs mt-2 font-bold">
                  Don't miss the deals!
                </Text>

              </View>

              <Image
                source={utils.assets.gavel}
                className="w-28 h-28"
                resizeMode="contain"
              />

            </TouchableOpacity>

            <View className="flex-row items-center justify-between mt-6 mb-3">

              <Text
                className="text-lg font-black"
                style={{
                  color: utils.colors.black,
                }}>
                Categories
              </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Categories')
                }>

                <Search
                  size={22}
                  color={utils.colors.black}
                />

              </TouchableOpacity>

            </View>

          </View>

          <FlatList
            data={CATEGORIES}
            horizontal
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
          />

          <View className="px-5 mt-7">

            <Text
              className="text-lg font-black mb-2"
              style={{
                color: utils.colors.black,
              }}>
              Live Auctions
            </Text>

            {getAuctions().length > 0 ? (

              <FlatList
                data={getAuctions()}
                renderItem={renderAuction}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />

            ) : (

              <View className="items-center py-14">

                <Text
                  style={{
                    color: utils.colors.grey,
                  }}>
                  No live auctions found.
                </Text>

              </View>

            )}

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default BuyerHomeScreen;

