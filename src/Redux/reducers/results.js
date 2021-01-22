import {UPDATE_QUIZ_RESULTS, RESET_QUIZ} from '../constants/actionTypes';

const initialState = {
  score: 0,
  numberOfQuestions: 0,
  questions: []
}
const resultsReducers = (results = initialState, action) => {
  

  switch(action.type){
    case UPDATE_QUIZ_RESULTS:
      let newState = Object.assign({}, results); 
      let newQ = {};
      newQ.questionTitle = action.payload.questionTitle;
      newQ.isCorrect = action.payload.isCorrect;
      newState.score = action.payload.score && newState.score + 1;
      newState.numberOfQuestions = action.payload.numberOfQuestions;
      newState.questions.push(newQ)
      return newState
    case RESET_QUIZ: 
      let newQQ = action.payload;
      return newQQ
    default: 
      return results;
  }
};

export default resultsReducers;