import { $HostIstance, $AuthHostIstance } from "./api"

export const create = async (subtype) => {
    const {data} = await $AuthHostIstance.post('subtype', subtype);
    return data
}

export const getAll = async () => {
    const {data} = await $HostIstance.get('subtype');
    return data;
}