import {combineReducers} from 'redux';
import quizes from './quiz';
import results from './results';

export default combineReducers({quizes, results})