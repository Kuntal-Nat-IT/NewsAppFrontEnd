import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json'
});

export default apiClient;