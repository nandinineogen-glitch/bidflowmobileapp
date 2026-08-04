import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import utils from '../../utils'; 
import {ChevronDown , Landmark} from 'lucide-react-native';
import { LineChart } from "react-native-chart-kit/v2";
import * as shape from 'd3-shape';

 const data = [
  { month: "Jan", revenue: 52 },
  { month: "Feb", revenue: 86 },
  { month: "Mar", revenue: 58 },
  { month: "Apr", revenue: 134 }
];


export default function AnalyticsScreen() {
  
    const renderActivityItem = ({ item }) => (
    <ScrollView>
    <View className="flex-row items-center justify-between px-5 py-3.5">
      <View className="flex-row items-center flex-1">
       
        <View className="h-12 w-12 rounded-xl items-center justify-center mr-4" style={{ borderColor: utils.colors.lightGrey }} >
          <Landmark
           
            style={{ width: 26, height: 26 , color: utils.colors.theme_color}}
          />
        </View>
        
       
        <View className="flex-1">
          <Text style={{ color: utils.colors.black }} className="font-bold text-xl">
            {item.Activity}
          </Text>
          <Text style={{ color: utils.colors.gray }} className="mt-0.5">
            {item.date}
          </Text>
        </View>
      </View>

      
      <Text style={{ color: utils.colors.gray }}>
        {item.time}
      </Text>
    </View>
    </ScrollView>
  );

  return (
 
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }}>
      
     
      <View className="flex-row items-center justify-between px-5 pt-6 pb-4">
        <View>
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            Analytics
          </Text>
          <Text className="text-xl mt-2" style={{ color: utils.colors.grey }}>
          Track your Performance.
          </Text>
        </View>
        
      </View>

      
      <View className="mx-5 my-3 py-5 pt-5 items-end rounded-2xl p-5 border border-gray-500" style={{ backgroundColor: utils.colors.white}}>
        
        <View className="flex-row items-end">
          <View>
            <Text className="text-lg font-bold" style={{ color: utils.colors.grey }}>This Month</Text>
          </View>
         <ChevronDown style={{ color : utils.colors.grey}} size={22}/>
        </View>
      </View>

      
    

     
      <View className="flex-row justify-between px-4 py-4">
       
        <TouchableOpacity className="border rounded-xl items-center flex-1 py-3 mx-1" style={{ borderColor: utils.colors.lightGrey }}>
          <Text style={{ color: utils.colors.gray }} className="text-center">Views</Text>
          <Text style={{ color: utils.colors.black }} className="text-2xl font-bold mt-2">12,560</Text>
          <Text style={{ color: utils.colors.green }} className="text-lg font-bold mt-2">11.5%</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity className="border rounded-xl items-center flex-1 py-3 mx-1"  style={{ borderColor: utils.colors.lightGrey }} >
          <Text style={{ color: utils.colors.gray }} className="text-center">Bids</Text>
          <Text style={{ color: utils.colors.black }} className="text-2xl font-bold mt-2">320</Text>
          <Text style={{ color: utils.colors.green }} className="text-lg font-bold mt-2">8.2%</Text>
        </TouchableOpacity>
        
      
        <TouchableOpacity className="border rounded-xl items-center flex-1 py-3 mx-1">
          <Text style={{ color: utils.colors.gray }} className="text-center">Orders</Text>
          <Text style={{ color: utils.colors.black }} className="text-2xl font-bold mt-2">28</Text>
          <Text style={{ color: utils.colors.green }} className="text-lg font-bold mt-2">15.3%</Text>
        </TouchableOpacity>
      </View>
    
    </View>
      <View className="border-b border-gray-300 my-4 mx-5" >
   
      </View>
      <View>
      <Text style={{ color: utils.colors.black }} className="text-xl font-bold px-5 pt-5 pb-2">
        Earnings Overview
      </Text>
       <Text style={{ color: utils.colors.black }} className="text-3xl font-bold px-5 ">
       ₹85,420
      </Text>
      </View>
      <View>
        
                 <LineChart
      data={data}
      xKey="month"
      yKey="revenue"
      width={410}
      height={240}
       gridMin={-50}
       gridMax={150}
        curve={shape.curveNatural}
        contentInset={{ top: 20, bottom: 20 }}
    />
           

      </View>
    </SafeAreaView>
    
  );
}

