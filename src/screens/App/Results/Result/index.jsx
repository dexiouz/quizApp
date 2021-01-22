import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
const Result = ({item}) => {
  const {isCorrect, questionTitle} = item ? item : {};
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.text,
          color: isCorrect === 'True' ? 'green' : 'red',
        }}>
        {isCorrect === 'True' ? '+' : '-'}
      </Text>
      <Text>{questionTitle}</Text>
    </View>
  );
};

export default Result;

Result.propTypes = {
  item: PropTypes.object.isRequired,
};
