import { $HostIstance, $AuthHostIstance } from "./api"

export const create = async (FromData) => {
    const { data } = await $AuthHostIstance.post('product', FromData);
    return data
}

export const getAll = async (params) => {
    const url = params
        ? `product?brandCountryId=${params.brandCountryId || ''}&typeId=${params.typeId || ''}`
        : `product`
    const { data } = await $HostIstance.get(url);
    return data;
}