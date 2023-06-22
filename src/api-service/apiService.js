import axios from 'axios';

const apiService = axios.create({
       baseURL: '136.158.61.247:8000',
    // baseURL: 'http://localhost:8000',
});

export default apiService;