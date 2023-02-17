import { MainLayout } from "../../components/global/MainLayout";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createSubTypeThunk, getAllSubTypesThunk } from "../../store/SubTypes/subTypesAction";
import { useEffect } from "react";
import { createTypeThunk } from "../../store/Types/TypesAction";
import { ProductFrom } from "./productForm";

export default function Admin() {
    useEffect(() => {
        dispatch(getAllSubTypesThunk())
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const subTypes = useSelector(state => state.SubTypes)
    const onSubmitSubType = (data) => {
        dispatch(createSubTypeThunk(data))

    };
    const onSubmitType = (data) => {
        dispatch(createTypeThunk({ name: data.name, subTypeId: data.subTypeId }))
    };
    return (
        <MainLayout>
            <div>admin page</div>
            <form onSubmit={handleSubmit(onSubmitSubType)}>
                <label>Введите имя категории</label>
                <input type="text" {...register('name', { required: true })} />
                <input type="submit" />
            </form>

            <form onSubmit={handleSubmit(onSubmitType)}>
                <lable>Выберите категорию для типа</lable>
                <select
                    {
                    ...register('subTypeId', { required: true, pattern: /\d{1,}/ })
                    }
                >
                    <option value={null} selected> Please Select </option>
                    {subTypes.subtypes.map(subtype => (
                        <option key={subtype.id} value={subtype.id}>{subtype.name}</option>
                    ))}
                </select>
                <lable>Введите название типа для категории</lable>
                <input type="text" {...register('name', { required: true })} />
                <input type="submit" />
            </form>

            <br />

            <ProductFrom />
            
        </MainLayout>
    )
}