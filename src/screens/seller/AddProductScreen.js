import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 

export default function AddProductScreen() {
 const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    { label: 'Mobile', value: 'mobile' },
    { label: 'Tablets', value: 'tablet' },
    { label: 'Laptop', value: 'laptop' },
  ];

  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false); 
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }} className="mx-8">
      
     
      <View className="flex-row items-center justify-between pt-6 pb-4">
        <View>
        
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            What are You Listing?
          </Text>
          <View className='w-44'>
          <Text className="text mt-0.5" style={{ color: utils.colors.black }}>
            Fill in the basic details of your product.
          </Text>
          </View>
        </View>
      </View>    
       <View className="mx-1 my-4 rounded-2xl py-6 border-4 border-dotted  items-center text-center" style={{ backgroundColor: utils.colors.white , borderColor: utils.colors.lightGrey}}>
        
        <View className="flex-row justify-between items-center text-center align-middle">
          <View>
            <Text className="text-xl font-bold" style={{ color: utils.colors.blue }}>Upload Photos</Text>
            <Text className="text" style={{ color: utils.colors.grey }}>Minimum 3 photos</Text>
            <Text className="text-4xl ml-14 mt-4 font-bold" style={{ color: utils.colors.blue }}>+</Text>
          </View>
        </View>
      </View>  
        <Text className="text-lg mb-2 mt-6 font-bold" style={{ color: utils.colors.black }}>
                  Product Name
                </Text>
                <View className="border rounded-xl px-4" style={{ borderColor: utils.colors.lightGrey }}>
                  <TextInput
                    placeholder=""
                    className='h-14'>
      
                  </TextInput>
                </View>

                   <View className="w-full mt-10 ">
      <Text className="text-lg font-bold" style={{ color: utils.colors.black}}>Category</Text>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        className="flex-row justify-between items-center w-full px-4 py-3 rounded-lg shadow-sm"
        style={{ borderColor: utils.colors.lightGrey , backgroundColor: utils.colors.white}}
      >
        <Text className="text-base">
          {selectedValue ? selectedValue.label : 'Select an option...'}
        </Text>
     
        <Text className="text-sm">{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>
       
     
      {isOpen && (
        <View className="w-full mt-1 rounded-lg shadow-md max-h-60 z-10" style={{ borderColor: utils.colors.lightGrey , backgroundColor: utils.colors.white}}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                className="px-4 py-3 flex-row items-center" 
              >
                <Text
                  className="text-base"
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
                <TouchableOpacity className="rounded-xl py-4 mb-4 mt-52" style={{ backgroundColor: utils.colors.blue }}>
            <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Continue</Text>
          </TouchableOpacity>
    </View>    
    </SafeAreaView>
  );
}

