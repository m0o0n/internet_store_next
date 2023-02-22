import { useForm } from "react-hook-form";
import { createTypeThunk } from "../../store/Types/TypesAction";
import { useDispatch, useSelector } from "react-redux";
export function TypeForm() {
    const dispatch = useDispatch()
    const subTypes = useSelector(state => state.SubTypes)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            subTypeId: 'Please Select'
        }
    });
    const onSubmitType = (data) => {
        dispatch(createTypeThunk({ name: data.name, subTypeId: data.subTypeId }))
        reset()
    };

    return (
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
    )
} 