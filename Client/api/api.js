import axios from 'axios'

export const $HostIstance = axios.create({
    baseURL: 'http://localhost:5000/api/'
})

export const $AuthHostIstance = axios.create({
    baseURL: 'http://localhost:5000/api/'
})

const authInterceptor = config =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  };
  
  $AuthHostIstance.interceptors.request.use(authInterceptor);