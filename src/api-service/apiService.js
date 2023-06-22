import axios from 'axios';

const apiService = axios.create({ 
    baseURL: 'http://localhost:8000',   ////'https://server-alpha-blue.vercel.app', 
});

export default apiService;
