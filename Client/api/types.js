import { $HostIstance, $AuthHostIstance } from "./api"

export const create = async (name, subTypeId) => {
    const { data } = await $AuthHostIstance.post('type', name, subTypeId);

    return data
}

export const getAll = async () => {
    const { data } = await $HostIstance.get('type');
    return data;
}