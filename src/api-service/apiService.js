import axios from 'axios';

const apiService = axios.create({ 
    baseURL: 'https://vercel-server-nu.vercel.app',
});

export default apiService;
