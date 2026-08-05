import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView,TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import utils from '../../utils'; 
import { Search , ChevronRight } from 'lucide-react-native';

const DATA = [
  {

    id: 1,
    Activity: 'New order received',
    name: 'iPhone 14 Pro Max',
    image: utils.assets.onboarding_bid, 
    time: "2m ago"
  },
  {
    id: 2,
    Activity: 'New bid placed',
    name: 'On Bbock for trade',
    image: utils.assets.onboarding_bid, 
    time: "5m ago"
  },
  {
    id: 3,
    Activity: 'Auction ending soon',
    name: 'MacBook Air M2',
    image: utils.assets.onboarding_bid,
    time: "15m ago"
  },
  {
    id: 4,
    Activity: 'Auction ending soon',
    name: 'MacBook Air M2',
    image: utils.assets.onboarding_bid,
    time: "15m ago"
  },
  {
    id: 5,
    Activity: 'Auction ending soon',
    name: 'MacBook Air M2',
    image: utils.assets.onboarding_bid,
    time: "15m ago"
  },
];

const Categories = [
  {
    id: 1,
    name: 'Electronics',
    image: utils.assets.onboarding_bid, 
  },
  {
    id: 2,
    name: 'Fashion',
    image: utils.assets.onboarding_bid, 
  },
  {
    id: 3,
    name: 'Home & Garden',
    image: utils.assets.onboarding_bid, 
  },
  {
    id: 4,
    name: 'Sports',                           
    image: utils.assets.onboarding_bid,
  },


];                

export default function BuyerHomeScreen() {
  
  const renderActivityItem = ({ item }) => (
    <ScrollView>
    <View className="flex-row items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: utils.colors.lightGrey }}>
      <View className="flex-row items-center flex-1">
       
        <View className="h-12 w-12 rounded-xl items-center justify-center mr-4 border" style={{ borderColor: utils.colors.lightGrey }} >
          <Image
            source={item.image}
            style={{ width: 26, height: 26 }}
          />
        </View>
        
       
        <View className="flex-1">
          <Text style={{ color: utils.colors.black }} className="font-bold text-xl">
            {item.Activity}
          </Text>
          <Text style={{ color: utils.colors.gray }} className="mt-0.5">
            {item.name}
          </Text>
        </View>
      </View>

      
      <Text style={{ color: utils.colors.gray }}>
        {item.time}
      </Text>
    </View>
    </ScrollView>
  );

  const renderCategoryItem = ({ item }) => (
    <ScrollView>
  <View className="flex-row justify-between px-4 py-4">
    <View>
      
      
        <Image
          source={item.image}
          style={{ width: 40, height: 40 }}
        />
      
      <Text style={{ color: utils.colors.black }} className="mt-2">
        {item.name}
      </Text>
    </View>
</View>
    </ScrollView>
  );


  return (
 
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }}>
      
     
      <View className="flex-row items-center justify-between px-5 pt-6 pb-4">
        <View>
          <Text className="text-3xl font-bold" style={{ color: utils.colors.grey }}>
           Hello, John
          </Text>
        </View>
        <Image
          source={utils.assets.profile}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View className="flex-row items-center border rounded-xl mx-5 px-3 py-2" style={{ borderColor: utils.colors.lightGrey }}>
      
        <Search
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1, color: utils.colors.lightGrey }}
        />
    
        <TextInput
          placeholder="Search Auctions,Ctegories,Products"
          className="flex-1 ml-2 h-10"
         
        />
       
        
      </View>
      
   
      
      <View className="mx-5 my-3 rounded-2xl p-5" style={{ backgroundColor: utils.colors.theme_color }}>
        
        <View className="flex-row justify-between items-start">
          <View>
            <Text className="text-2xl font-bold" style={{ color: utils.colors.white }}>Live Auctions</Text>
            <Text className=" mt-1.5" style={{ color: utils.colors.white }}>Don't miss the deals!</Text>
          </View>
          
           <Image
          source={utils.assets.gavel}
          style={{ width: 99, height: 90 }}
          className="-mt-4 -mb-16"
        />
        </View>

       
      </View>
      <View className="flex-row justify-between">
        <View>
        <Text className="text-xl font-bold px-5 pt-5 pb-2" style={{ color: utils.colors.black }}>
          Categories
        </Text>
        </View>
        <View className="flex-row items-center px-5 pt-5 pb-2">
          <TouchableOpacity className="font-bold text-lg" >
        <ChevronRight size={20} color="black" />
        </TouchableOpacity>
      </View>
      </View>
      
      
     <FlatList
        data={DATA}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        
        contentContainerStyle={{ paddingBottom: 30 }}

      />

     
      <View className="h-[1px] bg-gray-100 mt-2 mx-5" />
      <Text style={{ color: utils.colors.black }} className="text-xl font-bold px-5 pt-5 pb-2">
        Recent Activity
      </Text>
    </View>
      <FlatList
        data={DATA}
        renderItem={renderActivityItem}
        keyExtractor={item => item.id.toString()}
        
        contentContainerStyle={{ paddingBottom: 30 }}

      />
    
    </SafeAreaView>
   
  );
}


