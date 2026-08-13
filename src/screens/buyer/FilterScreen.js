import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronDown} from 'lucide-react-native';
import utils from '../../utils';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const FilterScreen = ({navigation}) => {
  const [sortBy, setSortBy] = useState('Ending Soon');
  const [category, setCategory] = useState('Electronics');
  const [condition, setCondition] = useState('All');
  const [location, setLocation] = useState('All Locations');

  const [sortOpen, setSortOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [conditionOpen, setConditionOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const [price, setPrice] = useState([0, 100000]);

  const clearAll = () => {
    setSortBy('Ending Soon');
    setCategory('Electronics');
    setCondition('All');
    setLocation('All Locations');
    setPrice([0, 100000]);

    setSortOpen(false);
    setCategoryOpen(false);
    setConditionOpen(false);
    setLocationOpen(false);
  };

  const changePrice = values => {
    setPrice(values);
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 24,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}>

          <View className="flex-row items-center justify-between pt-5 mb-8">

            <Text
              className="text-2xl font-bold"
              style={{color: utils.colors.black}}>
              Filters
            </Text>

            <TouchableOpacity onPress={clearAll}>
              <Text
                className="font-bold"
                style={{color: utils.colors.theme_color}}>
                Clear All
              </Text>
            </TouchableOpacity>

          </View>

          <Text
            className="text-base font-bold mb-2"
            style={{color: utils.colors.black}}>
            Sort By
          </Text>

          <TouchableOpacity
            onPress={() => {
              setSortOpen(!sortOpen);
              setCategoryOpen(false);
              setConditionOpen(false);
              setLocationOpen(false);
            }}
            className="h-14 flex-row items-center justify-between px-4 rounded-xl border"
            style={{borderColor: utils.colors.grey}}>

            <Text
              className="text-base"
              style={{color: utils.colors.black}}>
              {sortBy}
            </Text>

            <ChevronDown
              size={20}
              color={utils.colors.grey}
            />

          </TouchableOpacity>

          {sortOpen && (
            <View className="px-4 mb-5 rounded-xl border mt-2">

              <TouchableOpacity
                onPress={() => {
                  setSortBy('Ending Soon');
                  setSortOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Ending Soon
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setSortBy('Newest');
                  setSortOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Newest
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setSortBy('Price Low to High');
                  setSortOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Price Low to High
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setSortBy('Price High to Low');
                  setSortOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Price High to Low
                </Text>
              </TouchableOpacity>

            </View>
          )}

          <Text
            className="text-base font-bold mb-2 mt-5"
            style={{color: utils.colors.black}}>
            Category
          </Text>

          <TouchableOpacity
            onPress={() => {
              setCategoryOpen(!categoryOpen);
              setSortOpen(false);
              setConditionOpen(false);
              setLocationOpen(false);
            }}
            className="h-14 flex-row items-center justify-between px-4 rounded-xl border"
            style={{borderColor: utils.colors.grey}}>

            <Text
              className="text-base"
              style={{color: utils.colors.black}}>
              {category}
            </Text>

            <ChevronDown
              size={20}
              color={utils.colors.grey}
            />

          </TouchableOpacity>

          {categoryOpen && (
            <View className="px-4 mb-5 rounded-xl border mt-2">

              <TouchableOpacity
                onPress={() => {
                  setCategory('Electronics');
                  setCategoryOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Electronics
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCategory('Watches');
                  setCategoryOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Watches
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCategory('Fashion');
                  setCategoryOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Fashion
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCategory('Home');
                  setCategoryOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Home
                </Text>
              </TouchableOpacity>

            </View>
          )}

          <View className="mb-6 mt-6">

            <Text
              className="text-base font-bold mb-3"
              style={{color: utils.colors.black}}>
              Price Range
            </Text>

            <View className="flex-row justify-between">

              <Text style={{color: utils.colors.black}}>
                ₹{price[0].toLocaleString('en-IN')}
              </Text>

              <Text style={{color: utils.colors.black}}>
                {price[1] >= 100000
                  ? '₹1,00,000+'
                  : `₹${price[1].toLocaleString('en-IN')}`}
              </Text>

            </View>

            <View className="items-center mt-1">

              <MultiSlider
                values={price}
                sliderLength={280}
                onValuesChange={changePrice}
                min={0}
                max={100000}
                step={1000}
                allowOverlap={false}
                snapped={false}
                selectedStyle={{
                  backgroundColor: utils.colors.theme_color,
                  height: 4,
                }}
                unselectedStyle={{
                  backgroundColor: '#D9D9D9',
                  height: 4,
                }}
                markerStyle={{
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                  backgroundColor: utils.colors.theme_color,
                }}
                pressedMarkerStyle={{
                  height: 18,
                  width: 18,
                  borderRadius: 9,
                  backgroundColor: utils.colors.theme_color,
                }}
              />

            </View>

          </View>

          <Text
            className="text-base font-bold mb-2"
            style={{color: utils.colors.black}}>
            Condition
          </Text>

          <TouchableOpacity
            onPress={() => {
              setConditionOpen(!conditionOpen);
              setSortOpen(false);
              setCategoryOpen(false);
              setLocationOpen(false);
            }}
            className="h-14 flex-row items-center justify-between px-4 rounded-xl border"
            style={{borderColor: utils.colors.grey}}>

            <Text
              className="text-base"
              style={{color: utils.colors.black}}>
              {condition}
            </Text>

            <ChevronDown
              size={20}
              color={utils.colors.grey}
            />

          </TouchableOpacity>

          {conditionOpen && (
            <View className="px-4 mb-5 rounded-xl border mt-2">

              <TouchableOpacity
                onPress={() => {
                  setCondition('All');
                  setConditionOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  All
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCondition('New');
                  setConditionOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  New
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCondition('Used');
                  setConditionOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Used
                </Text>
              </TouchableOpacity>

            </View>
          )}

          <Text
            className="text-base font-bold mb-2 mt-5"
            style={{color: utils.colors.black}}>
            Location
          </Text>

          <TouchableOpacity
            onPress={() => {
              setLocationOpen(!locationOpen);
              setSortOpen(false);
              setCategoryOpen(false);
              setConditionOpen(false);
            }}
            className="h-14 flex-row items-center justify-between px-4 rounded-xl border"
            style={{borderColor: utils.colors.grey}}>

            <Text
              className="text-base"
              style={{color: utils.colors.black}}>
              {location}
            </Text>

            <ChevronDown
              size={20}
              color={utils.colors.grey}
            />

          </TouchableOpacity>

          {locationOpen && (
            <View className="px-4 mb-5 rounded-xl border mt-2">

              <TouchableOpacity
                onPress={() => {
                  setLocation('All Locations');
                  setLocationOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  All Locations
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setLocation('Mumbai');
                  setLocationOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Mumbai
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setLocation('Ahmedabad');
                  setLocationOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Ahmedabad
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setLocation('Delhi');
                  setLocationOpen(false);
                }}
                className="py-3">
                <Text style={{color: utils.colors.black}}>
                  Delhi
                </Text>
              </TouchableOpacity>

            </View>
          )}

          <TouchableOpacity
            className="rounded-xl py-4 mt-6"
            style={{backgroundColor: utils.colors.theme_color}}
            onPress={() => navigation.navigate('ProductListing')}>

            <Text
              className="text-center text-lg font-bold"
              style={{color: utils.colors.white}}>
              Apply Filters
            </Text>

          </TouchableOpacity>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default FilterScreen;