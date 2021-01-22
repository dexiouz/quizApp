import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from '../../../../components/Button';
const Questions = ({
  quizes,
  currentQuestion,
  handleTrueQuestion,
  handleFalseQuestion,
}) => { 
  const {category, correct_answer} = quizes ? quizes[currentQuestion] : [];
  const question = quizes[currentQuestion].question;
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={{...styles.text, textAlign: 'center'}}>
          Question {currentQuestion + 1}/{quizes.length}
        </Text>
        <Text style={styles.text}>Category: {category}</Text>
        <Text style={{...styles.text, fontSize: 24}}>"{question}"</Text>
      </View>
      <View style={styles.answerBtns}>
        <Button
          onPress={() => handleTrueQuestion(correct_answer, question, quizes)}
          title="True"
        />
        <Button
          onPress={() => handleFalseQuestion(correct_answer, question, quizes)}
          title="False"
        />
      </View>
    </View>
  );
};

export default Questions;

Questions.propTypes = {
  quizes: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
      question: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
  currentQuestion: PropTypes.number.isRequired,
  handleTrueQuestion: PropTypes.func.isRequired,
  handleFalseQuestion: PropTypes.func.isRequired,
};
