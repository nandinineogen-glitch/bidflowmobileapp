import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ChevronDown,
  ChevronLeft,
} from 'lucide-react-native';
import utils from '../../utils';

const SORT_OPTIONS = [
  'Ending Soon',
  'Lowest Price',
  'Highest Price',
  'Newest',
  'Highest Bid',
];

const CATEGORY_OPTIONS = [
  'All Categories',
  'Electronics',
  'Watches',
  'Fashion',
  'Phones',
  'Laptops',
  'Cameras',
  'Audio',
  'Home',
  'Gaming',
  'Vehicles',
  'Collectibles',
];

const CONDITION_OPTIONS = [
  'All',
  'New',
  'Like New',
  'Used',
];

const LOCATION_OPTIONS = [
  'All Locations',
  'Ahmedabad',
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Pune',
];

export default function FilterScreen({navigation, route}) {
  const [sortBy, setSortBy] = useState(
    route?.params?.filters?.sortBy || 'Ending Soon',
  );

  const [category, setCategory] = useState(
    route?.params?.filters?.category || 'All Categories',
  );

  const [condition, setCondition] = useState(
    route?.params?.filters?.condition || 'All',
  );

  const [location, setLocation] = useState(
    route?.params?.filters?.location || 'All Locations',
  );

  const [minPrice, setMinPrice] = useState(
    route?.params?.filters?.minPrice || 0,
  );

  const [maxPrice, setMaxPrice] = useState(
    route?.params?.filters?.maxPrice || 100000,
  );

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = value => {
    setOpenDropdown(prev =>
      prev === value ? null : value,
    );
  };

  const clearAll = () => {
    setSortBy('Ending Soon');
    setCategory('All Categories');
    setCondition('All');
    setLocation('All Locations');
    setMinPrice(0);
    setMaxPrice(100000);
    setOpenDropdown(null);
  };

  const applyFilters = () => {
    const filters = {
      sortBy,
      category,
      condition,
      location,
      minPrice,
      maxPrice,
    };

    if (route?.params?.onApply) {
      route.params.onApply(filters);
    }

    navigation.navigate('ProductListing');
  };

  const renderDropdown = (
    title,
    value,
    options,
    keyName,
    setValue,
  ) => {
    const isOpen = openDropdown === keyName;

    return (
      <View className="mt-6">
        <Text
          className="font-bold mb-3"
          style={{color: utils.colors.black}}>
          {title}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => toggleDropdown(keyName)}
          className="h-14 px-4 rounded-xl border flex-row items-center justify-between"
          style={{
            borderColor: utils.colors.lightGrey,
            backgroundColor: utils.colors.white,
          }}>
          <Text
            className="text-sm"
            style={{color: utils.colors.black}}>
            {value}
          </Text>

          <ChevronDown
            size={18}
            color={utils.colors.grey}
          />
        </TouchableOpacity>

        {isOpen && (
          <View
            className="rounded-xl mt-2 border overflow-hidden"
            style={{
              borderColor: utils.colors.lightGrey,
              backgroundColor: utils.colors.white,
            }}>
            {options.map(option => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  setValue(option);
                  setOpenDropdown(null);
                }}
                className="px-4 py-3 border-b"
                style={{
                  borderColor: utils.colors.lightGrey,
                  backgroundColor:
                    value === option
                      ? '#F3F0FF'
                      : utils.colors.white,
                }}>
                <Text
                  className="text-sm"
                  style={{
                    color:
                      value === option
                        ? utils.colors.theme_color
                        : utils.colors.black,
                  }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <View className="px-5 pt-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
     

          <Text
            className="text-2xl font-black ml-2"
            style={{color: utils.colors.black}}>
            Filters
          </Text>
        </View>

        <TouchableOpacity onPress={clearAll}>
          <Text
            className="text-sm font-bold"
            style={{color: utils.colors.theme_color}}>
            Clear All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 30,
        }}>
        {renderDropdown(
          'Sort By',
          sortBy,
          SORT_OPTIONS,
          'sort',
          setSortBy,
        )}

        {renderDropdown(
          'Category',
          category,
          CATEGORY_OPTIONS,
          'category',
          setCategory,
        )}

        <View className="mt-7">
          <Text
            className="text-sm font-bold mb-4"
            style={{color: utils.colors.black}}>
            Price Range
          </Text>

          <View className="flex-row justify-between">
            <View
              className="px-4 py-3 rounded-xl border w-[46%]"
              style={{
                borderColor: utils.colors.lightGrey,
              }}>
              <Text
                className="text-[10px]"
                style={{color: utils.colors.grey}}>
                Minimum
              </Text>

              <Text
                className="font-bold mt-1"
                style={{color: utils.colors.black}}>
                ₹{minPrice.toLocaleString('en-IN')}
              </Text>
            </View>

            <View
              className="px-4 py-3 rounded-xl border w-[46%]"
              style={{
                borderColor: utils.colors.lightGrey,
              }}>
              <Text
                className="text-[10px]"
                style={{color: utils.colors.grey}}>
                Maximum
              </Text>

              <Text
                className="font-bold mt-1"
                style={{color: utils.colors.black}}>
                ₹{maxPrice.toLocaleString('en-IN')}
              </Text>
            </View>
          </View>

          <View className="mt-6">
            <View
              className="h-1 rounded-full"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>
              <View
                className="absolute w-5 h-5 rounded-full -top-2"
                style={{
                  backgroundColor: utils.colors.theme_color,
                  left: '0%',
                }}
              />

              <View
                className="absolute w-5 h-5 rounded-full -top-2"
                style={{
                  backgroundColor: utils.colors.theme_color,
                  right: '0%',
                }}
              />
            </View>
          </View>
        </View>

        {renderDropdown(
          'Condition',
          condition,
          CONDITION_OPTIONS,
          'condition',
          setCondition,
        )}

        {renderDropdown(
          'Location',
          location,
          LOCATION_OPTIONS,
          'location',
          setLocation,
        )}

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={applyFilters}
          className="h-14 rounded-xl items-center justify-center mt-8"
          style={{
            backgroundColor: utils.colors.theme_color,
          }}>
          <Text className="text-white text-base font-bold">
            Apply Filters
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
