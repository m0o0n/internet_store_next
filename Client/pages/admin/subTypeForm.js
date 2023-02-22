import { useForm } from "react-hook-form";
import { createSubTypeThunk } from "../../store/SubTypes/subTypesAction";
import { useDispatch } from "react-redux";
export function SubTypeForm() {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: ''
        }
    });
    const onSubmitSubType = (data) => {
        dispatch(createSubTypeThunk(data))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmitSubType)}>
            <label>Введите имя категории</label>
            <input type="text" {...register('name', { required: true })} />
            <input type="submit" />
        </form>
    )
} 