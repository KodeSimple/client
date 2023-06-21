import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://54.210.144.77:8000',
    // baseURL: 'http://localhost:8000',
});

export default apiService;