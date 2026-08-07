import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Search,
  X,
  Clock3,
  Filter
} from 'lucide-react-native';
import utils from '../../utils';


const RECENT_SEARCHES = [
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
];

export default function SearchScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [recent, setRecent] = useState(RECENT_SEARCHES);

  const filteredData = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return [];
    }

    return AUCTIONS.filter(item =>
      `${item.title} ${item.subtitle} ${item.category}`
        .toLowerCase()
        .includes(value),
    );
  }, [search]);

  const submitSearch = () => {
    const value = search.trim();

    if (!value) {
      return;
    }

    setRecent(prev => [
      value,
      ...prev.filter(item => item.toLowerCase() !== value.toLowerCase()),
    ]);
  };

  const removeRecent = item => {
    setRecent(prev => prev.filter(value => value !== item));
  };

  const selectRecent = item => {
    setSearch(item);
  };

  const renderAuction = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() =>
        navigation.navigate('ProductDetails')
      }
      className="flex-row items-center py-4 border-b"
      style={{borderColor: utils.colors.lightGrey}}>
      <View className="w-20 h-20 rounded-xl bg-gray-50 overflow-hidden items-center justify-center">
        <Image
          source={item.image}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1 ml-4">
        <Text
          className="font-bold text-[14px]"
          style={{color: utils.colors.black}}>
          {item.title}
        </Text>

        <Text
          className="text-xs mt-1"
          style={{color: utils.colors.grey}}>
          {item.subtitle}
        </Text>

        <View className="flex-row items-center mt-2">
          <Text
            className="font-black"
            style={{color: utils.colors.black}}>
            ₹{item.price.toLocaleString('en-IN')}
          </Text>

          <Clock3
            size={13}
            color={utils.colors.red}
            style={{marginLeft: 12}}
          />

          <Text
            className="text-[10px] ml-1"
            style={{color: utils.colors.red}}>
            {item.time}
          </Text>
        </View>
      </View>

      <Text
        className="text-xs"
        style={{color: utils.colors.grey}}>
        {item.bids} Bids
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View className="px-5 pt-4 flex-1">
          <View className="flex-row items-center">
            <View
              className="flex-1 flex-row items-center h-12 px-4 rounded-xl"
              style={{backgroundColor: '#F7F7FA'}}>
              <Search
                size={20}
                color={utils.colors.grey}
              />

              <TextInput
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={submitSearch}
                placeholder="Search auctions, products..."
                placeholderTextColor={utils.colors.grey}
                className="flex-1 ml-3 text-sm"
                style={{color: utils.colors.black}}
                autoFocus
              />

              {search.length > 0 && (
                <TouchableOpacity
                  onPress={() => setSearch('')}>
                  <X
                    size={18}
                    color={utils.colors.grey}
                  />
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Filter')}
              className="w-12 h-12 rounded-xl items-center justify-center ml-2"
              >
              <Filter
                size={20}
                color={utils.colors.theme_color}
              />
            </TouchableOpacity>
          </View>

          {search.length === 0 ? (
            <>
              <View className="flex-row items-center justify-between mt-7">
                <Text
                  className="text-lg font-black"
                  style={{color: utils.colors.black}}>
                  Recent Searches
                </Text>

                <TouchableOpacity
                  onPress={() => setRecent([])}>
                  <Text
                    className="text-xs font-bold"
                    style={{color: utils.colors.theme_color}}>
                    Clear All
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="mt-3">
                {recent.map(item => (
                  <View
                    key={item}
                    className="flex-row items-center py-3">
                    <Clock3
                      size={17}
                      color={utils.colors.theme_color}
                    />

                    <TouchableOpacity
                      className="flex-1 ml-3"
                      onPress={() => selectRecent(item)}>
                      <Text
                        className="text-sm"
                        style={{color: utils.colors.black}}>
                        {item}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => removeRecent(item)}>
                      <X
                        size={17}
                        color={utils.colors.grey}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
              <View className="flex-row flex-wrap mt-5">
              </View>
            </>
          ) : (
            <>
              <View className="flex-row items-center justify-between mt-7">
                <Text
                  className="text-lg font-black"
                  style={{color: utils.colors.black}}>
                  Search Results
                </Text>

                <Text
                  className="text-xs"
                  style={{color: utils.colors.grey}}>
                  {filteredData.length} Results
                </Text>
              </View>

              {filteredData.length > 0 ? (
                <FlatList
                  data={filteredData}
                  renderItem={renderAuction}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              ) : (
                <View className="flex-1 items-center justify-center">
                  <Search
                    size={45}
                    color={utils.colors.lightGrey}
                  />

                  <Text
                    className="font-bold mt-4"
                    style={{color: utils.colors.black}}>
                    No auctions found
                  </Text>

                  <Text
                    className="text-xs mt-2"
                    style={{color: utils.colors.grey}}>
                    Try searching another product
                  </Text>
                </View>
              )}
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
