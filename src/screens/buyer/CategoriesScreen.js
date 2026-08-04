import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView,TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import utils from '../../utils'; 
import { Search , ChevronRight } from 'lucide-react-native';

const DATA = [
  {
    id: '1',
    name: 'Electronics',
  },
  {
    id: '2',
    name: 'Clothing',
  },
  {
    id: '3',
    name: 'Home & Kitchen',
  },
];

export default function CategoriesScreen() {
    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
            <View>
            <View className="flex-row justify-between px-4">
                <View>
               <Text className="text-2xl font-bold mt-6 mb-2" style={{ color: utils.colors.black }}>
                Categories
                </Text>
                </View>
                <Text className="text-lg mt-6 mb-2" style={{ color: utils.colors.theme_color }}>
                Clear All
                </Text>
                </View>
                <View className="flex-row justify-between px-4">

                <View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity className="py-3">
                            <Text className="text-lg" style={{ color: utils.colors.black }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                </View>
                </View>
                </View>
                </SafeAreaView>  
    );


  
}

