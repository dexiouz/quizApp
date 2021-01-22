import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';
 const index = ({otherColor, size}) => (
  <View style={styles.container}>
    <ActivityIndicator
     size={size ? size : "large"}
      color={otherColor ? otherColor : '#0753AB'}
    />
  </View>
);

export default index;

