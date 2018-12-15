import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import headerStyle from './headerStyle';

const Header = () => (
  <View style={headerStyle.container}>
    <TouchableOpacity>
      <Ionicons name="bars" color="#ddd" size={24} />
    </TouchableOpacity>
    <Text style={headerStyle.txtLogo}>SEVEN MOVIES</Text>
    <TouchableOpacity>
      <Ionicons name="search" color="#ddd" size={24} />
    </TouchableOpacity>
  </View>
);

export default Header;
