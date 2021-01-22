import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';  
import {styles} from './styles'; 
const Header = ({
  title,
  leftIcon,
  leftIconAction,
  containerStyle,
  appLeftIcon,
  otherAction
}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.container, ...containerStyle}}>
     <Text>jj</Text>
    
    </View>
  );
};

export default Header;
 