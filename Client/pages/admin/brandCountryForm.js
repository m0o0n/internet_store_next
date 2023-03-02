import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import style from './admin.module.scss'
import { createBrandCountryThunk } from "../../store/BrandCountry/brandCountryActions";
export function BrandCountryForm() {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: ''
        }
    });
    const onSubmitBrandCountry = (data) => {
        dispatch(createBrandCountryThunk(data))
        reset()
    };

    return (
        <form className={style.brand_country} onSubmit={handleSubmit(onSubmitBrandCountry)}>
            <label>Введите имя Бренда и Страны</label>
            <div>
                <input type="text" {...register('name', { required: true })} />
                <input type="submit" />
            </div>

        </form>
    )
} 