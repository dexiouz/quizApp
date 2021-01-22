import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import {getQuiz} from '../../../Redux/actions/quiz';
import {styles} from './styles';
import theme from '../../../config/theme';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  // on mount, get the quizes from the api and store in redux
  useEffect(() => {
    dispatch(getQuiz());
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme.lightStatusBarStyle}
        backgroundColor={theme.primary}
      />
      <Text style={styles.text}>Welcome to the Trivia Challenge</Text>
      <Text style={styles.text}>
        You will be presented with 10 true or false questions
      </Text>
      <Text style={styles.text}>Can you score 100%?</Text>
      <View style={styles.btn}>
        <Button onPress={() => navigation.navigate('Quiz')} title="Begin" />
      </View>
    </View>
  );
};

export default Home;
Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};
