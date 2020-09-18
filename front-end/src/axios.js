import axios from 'axios';

const instance = axios.create({
    baseURL: 'httP://localhost:8001'
});

export default instance;