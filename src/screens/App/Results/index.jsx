import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import {resetQuiz} from '../../../Redux/actions/results';
import Result from './Result';
import {styles} from './styles';
const Results = ({route, navigation}) => {
  const {score} = route.params;
  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);
  const {numberOfQuestions, questions} = results;
  const handleReset = () => {
    const payload = {
      score: 0,
      numberOfQuestions: 0,
      questions: [],
    };
    dispatch(resetQuiz(payload));
    navigation.navigate('Home');
  }; 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {/* Lol, this is not the best way to calculate % unless when the length is always 10, but, oh well, just trying out creativity and workarounds */}
        You scored {score} out of {numberOfQuestions} questions {numberOfQuestions === 10 ? `${score}0%` : null} 
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {questions.map((item, index) => (
          <View key={index} style={{marginBottom: 10}}>
            <Result item={item} />
          </View>
        ))}
      </ScrollView>
      <Button onPress={() => handleReset()} title="Replay" />
    </View>
  );
};

export default Results;

Results.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
