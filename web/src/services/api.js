import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2704'
});

export default api;