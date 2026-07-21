import React from 'react';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import utils from '../utils';

const Header = ({
    label,
}) => {
    return (
         <Text className="text-4xl font-bold" style={{ color: utils.colors.black }}>
            {label}
          </Text>
    );
}
export default Header;

 