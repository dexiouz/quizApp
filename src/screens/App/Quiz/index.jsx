import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../../components/Loader';
import {updateResults} from '../../../Redux/actions/results';
import QuestionsComponent from './Questions';
import {styles} from './styles';
const Quiz = ({navigation}) => {
  const quizes = useSelector((state) => state.quizes);
  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleTrueQuestion = (isCorrect, questionTitle, quizes) => {
    const nextQuestion = currentQuestion + 1;
    const increaseScore = score + 1;
    const paylaod = {
      score: isCorrect === 'True' ? true : false,
      isCorrect: isCorrect === 'True' ? 'True' : 'False',
      questionTitle,
      numberOfQuestions: quizes.length,
    };

    dispatch(updateResults(paylaod));
    isCorrect === 'True' ? setScore(increaseScore) : 0;
    nextQuestion < quizes.length
      ? setCurrentQuestion(nextQuestion)
      : navigation.navigate('Results', {
          score: isCorrect === 'True' ? increaseScore : score,
        });
  };

  const handleFalseQuestion = (isCorrect, questionTitle, quizes) => {
    const nextQuestion = currentQuestion + 1;
    const increaseScore = score + 1;
    const paylaod = {
      score: isCorrect === 'False' ? true : false,
      isCorrect: isCorrect === 'False' ? 'True' : 'False',
      questionTitle,
      numberOfQuestions: quizes.length,
    };
    dispatch(updateResults(paylaod));
    isCorrect === 'False' ? setScore(increaseScore) : 0;
    nextQuestion < quizes.length
      ? setCurrentQuestion(nextQuestion)
      : navigation.navigate('Results', {
          score: isCorrect === 'False' ? increaseScore : score,
        });
  };

  return (
    <View style={styles.container}>
      {!quizes.length ? (
        <Loader />
      ) : (
        <QuestionsComponent
          quizes={quizes}
          handleTrueQuestion={handleTrueQuestion}
          handleFalseQuestion={handleFalseQuestion}
          currentQuestion={currentQuestion}
          score={score}
        />
      )}
    </View>
  );
};

export default Quiz;

Quiz.propTypes = {
  navigation: PropTypes.object.isRequired,
};
