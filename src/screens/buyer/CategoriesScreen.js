import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView,KeyboardAvoidingView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import utils from '../../utils'; 
import { Search , ChevronRight } from 'lucide-react-native';

const DATA = [
  {
    id: '1',
    name: 'Electronics',
    image:utils.assets.buyer
  },
  {
    id: '2',
    name: 'Clothing',
    image:utils.assets.buyer
  },
  {
    id: '3',
    name: 'Home',
    image:utils.assets.buyer
  },
  {
    id: '4',
    name: 'Home',
    image:utils.assets.buyer
  },
  {
    id: '5',
    name: 'Home',
    image:utils.assets.buyer
  },
  {
    id: '6',
    name: 'Home',
    image:utils.assets.buyer
  },
  {
    id: '7',
    name: 'Home',
    image:utils.assets.buyer
  },
];

export default function CategoriesScreen({navigation}) {

    return (
         <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        
            <View>
            <View className="flex-row justify-between px-4">
                <View>
               <Text className="text-2xl font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
                Categories
                </Text>
                </View>
                <TouchableOpacity className='mt-6 mb-2' onPress={() =>  navigation.navigate('BuyerBottomTab', { screen: 'Search' })}>

               
               <Search
                size={20}
                color={utils.colors.black}
              
              />
</TouchableOpacity>
                </View>
                <View className="flex-row justify-between px-4">
 
                <View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <View className='flex-row justify-between px-4 '>
                        <TouchableOpacity className="py-3 w-28 items-center border border-gray-300 rounded-xl mt-7" onPress={() => navigation.navigate('ProductListing')}>
                           
                              <Image
                                        source={item.image}
                                        className="w-20 h-20"
                                       
                                      />
                            <Text className="text-lg" style={{ color: utils.colors.black }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                        </View>
                    )}
                />
                </View>
                </View>
                </View>
               
                </KeyboardAvoidingView>
                </SafeAreaView>  
    );
}

