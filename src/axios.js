import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-backend97.herokuapp.com",
})

export default instance;