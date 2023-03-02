import { $HostIstance, $AuthHostIstance } from "./api"

export const create = async (name) => {
    const {data} = await $AuthHostIstance.post('brandCountry', name);
    return data
}

export const getAll = async () => {
    const {data} = await $HostIstance.get('brandCountry');
    return data;
}