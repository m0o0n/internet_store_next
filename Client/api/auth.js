import { $HostIstance, $AuthHostIstance } from "./api"
import jwt_decode from 'jwt-decode'
const registration = async (email, password) => {
    const {data} = await $HostIstance.post('user/registration', {email, password, role: "USER"});
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const {data}  = await $HostIstance.post('user/login', {email, password});
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $AuthHostIstance.get('user/auth');
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}