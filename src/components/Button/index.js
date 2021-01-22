import React from 'react';
import {styles} from './styles';
import {TouchableOpacity, Text} from 'react-native';

const  Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;