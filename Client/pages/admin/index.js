import { MainLayout } from "../../components/global/MainLayout";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createSubTypeThunk, getAllSubTypesThunk } from "../../store/SubTypes/subTypesAction";
import { useEffect } from "react";
import { createTypeThunk } from "../../store/Types/TypesAction";
import { ProductFrom } from "./productForm";
import { SubTypeForm } from "./subTypeForm";
import { TypeForm } from "./typeForm";
import style from './admin.module.scss'

export default function Admin() {
    useEffect(() => {
        dispatch(getAllSubTypesThunk())
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const subTypes = useSelector(state => state.SubTypes)

    const onSubmitType = (data) => {
        dispatch(createTypeThunk({ name: data.name, subTypeId: data.subTypeId }))
    };
    return (
        <MainLayout>
            <div className={style.admin}>

                <SubTypeForm />

                <TypeForm />

                <ProductFrom />

            </div>
        </MainLayout>
    )
}