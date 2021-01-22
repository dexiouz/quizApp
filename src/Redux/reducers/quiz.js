import {FETCH_QUIZ} from '../constants/actionTypes';

const quizReducers = (quiz = [], action) => {
  switch(action.type){
    case FETCH_QUIZ: 
      return action.payload;
    default: 
      return quiz;
  }
};

export default quizReducers;