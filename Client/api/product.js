import { $HostIstance, $AuthHostIstance } from "./api"

export const create = async (FromData) => {
    const {data} = await $AuthHostIstance.post('product', FromData);
    return data
}

export const getAll = async () => {
    const {data} = await $HostIstance.get('product');
    return data;
}