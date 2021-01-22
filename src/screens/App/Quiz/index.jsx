import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../../../components/Loader";
import { updateResults } from "../../../Redux/actions/results";
import QuestionsComponent from "./Questions";
import { styles } from "./styles";
const Quiz = ({ navigation }) => {
  // get quiz from redux store
  const quizes = useSelector((state) => state.quizes);
  
  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // function called whenever the "True" button is clicked
  const handleTrueQuestion = (isCorrect, questionTitle, quizes) => {
    // increment next question by 1
    const nextQuestion = currentQuestion + 1;
    // increment score by 1
    const increaseScore = score + 1;
    // payload to send to reducer on dispatch
    const paylaod = {
      score: isCorrect === "True" ? true : false,
      isCorrect: isCorrect === "True" ? "True" : "False",
      questionTitle,
      numberOfQuestions: quizes.length,
    };
    // redux dispatch for updating results
    dispatch(updateResults(paylaod));
    // dynamically change score value based on whether the question was answered correctly
    isCorrect === "True" ? setScore(increaseScore) : 0;
    //  To determine end of quiz if the question is finished and navigate to Results page with params passed in
    nextQuestion < quizes.length
      ? setCurrentQuestion(nextQuestion)
      : navigation.navigate("Results", {
          score: isCorrect === "True" ? increaseScore : score,
        });
  };

  const handleFalseQuestion = (isCorrect, questionTitle, quizes) => {
    // increment next question by 1
    const nextQuestion = currentQuestion + 1;
    // increment score by 1
    const increaseScore = score + 1;
    // payload to send to reducer on dispatch
    const paylaod = {
      score: isCorrect === "False" ? true : false,
      isCorrect: isCorrect === "False" ? "True" : "False",
      questionTitle,
      numberOfQuestions: quizes.length,
    };
    // redux dispatch for updating results
    dispatch(updateResults(paylaod));
    // dynamically change score value based on whether the question was answered correctly
    isCorrect === "False" ? setScore(increaseScore) : 0;
    //  To determine end of quiz if the question is finished and navigate to Results page with params passed in
    nextQuestion < quizes.length
      ? setCurrentQuestion(nextQuestion)
      : navigation.navigate("Results", {
          score: isCorrect === "False" ? increaseScore : score,
        });
  };

  return (
    <View style={styles.container}>
      {/* if no quizes, return a loader else render the Quiz component, incase the api call is still on going */}
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
