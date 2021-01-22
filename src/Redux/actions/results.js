import { UPDATE_QUIZ_RESULTS, RESET_QUIZ } from '../constants/actionTypes';

export const updateResults = (payload) => async (dispatch) => {
  dispatch({type: UPDATE_QUIZ_RESULTS, payload})
};
export const resetQuiz = (payload) => async (dispatch) => {
  dispatch({type: RESET_QUIZ, payload})
};