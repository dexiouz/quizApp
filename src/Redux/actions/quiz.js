import {FETCH_QUIZ } from '../constants/actionTypes';
import * as api from '../../config/api';
export const getQuiz = () => async (dispatch) => {
  try {
    const data = await api.fetchQuiz();
    const payload = data.data.results
    dispatch({type: FETCH_QUIZ , payload})
  } catch(error){
    console.log(error)
  }
};
 