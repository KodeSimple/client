import axios from 'axios';

const apiService = axios.create({ 
    baseURL: 'https://vercel-server-2-j72ubblp7-kodesimple-s-team.vercel.app/',   ////'https://server-alpha-blue.vercel.app', 
});

export default apiService;
