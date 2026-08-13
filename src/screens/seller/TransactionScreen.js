import React from 'react';
import { View, Text, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 
import {ChevronDown , Landmark} from 'lucide-react-native';

const DATA = [
  {

    id: 1,
    Activity: 'Payout to bank',
    date: '20 MAY 2024',
   
    time: "-₹24,000"
  },
  {
    id: 2,
    Activity: 'Order Payment',
    date: '10 MAY 2024',
  
    time: "-₹63,000"
  },
  
];

export default function TransactionScreen({navigation}) {
  
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
 
     <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
     
      
       
    <View style={{ backgroundColor: utils.colors.white }}>
      
     
      
      
    <Text style={{ color: utils.colors.black }} className="text-xl font-bold px-5 pt-5 pb-2 mt-5">
        Transaction History
      </Text>

      <FlatList
              data={DATA}
              renderItem={renderActivityItem}
              keyExtractor={item => item.id.toString()}
              
              contentContainerStyle={{ paddingBottom: 30 }}
      
            />
            </View>
            
    </SafeAreaView>
    
  );
}

