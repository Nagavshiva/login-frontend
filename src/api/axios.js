import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://loginpage-backend-88tj.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
