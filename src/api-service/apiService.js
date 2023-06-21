import axios from 'axios';

const apiService = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:8000',
=======
    baseURL: 'http://54.210.144.77:8000',
    // baseURL: 'http://localhost:8000',
>>>>>>> 355c98f35760ff38ea57e6cbee3e49ec99aba5ca
});

export default apiService;