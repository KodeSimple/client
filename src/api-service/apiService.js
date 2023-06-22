import axios from 'axios';

const apiService = axios.create({
    baseURL: 'https://server-alpha-blue.vercel.app', 
    // baseURL: 'http://localhost:8000',
});

export default apiService;
