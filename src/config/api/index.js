import axios from 'axios';

const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
// const url = 'http://localhost:4000/posts';

export const fetchQuiz = () => axios.get(url);