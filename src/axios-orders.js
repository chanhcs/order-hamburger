import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-be20c.firebaseio.com/'
});

export default instance;