import { useForm, useFieldArray } from "react-hook-form";
import { useDropzone } from 'react-dropzone';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import style from './admin.module.scss';
import { createProductsThunk } from "../../store/Products/productsActions";

export const ProductFrom = () => {
    
    const dispatch = useDispatch()

    const { register, reset, handleSubmit, setValue, control } = useForm({
        defaultValues: {
            info: [],
            img: [null],
            typeId: 'Please Select',
            brandCountryId: 'Please Select',
            name: '',
            price1: '',
            price10: '',
            price50: '',
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "info",
    });
    
    const [file, setFile] = useState(null)

    const types = useSelector(state => state.Types.types)
    
    const brandsCountry = useSelector(state => state.BrandsCountry.brandsCountry)
    
    const onSubmitProduct = (data) => {
        const {name, price1, price10, price50, typeId, brandCountryId, img, info} = data
        dispatch(createProductsThunk({name, price1, price10, price50, typeId, brandCountryId, img: img[0], info}))
        console.log(data, img[0])
        reset()
        setFile(null)
    };

    const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({ onDrop: files => { setValue("img", files) } })
    
    useEffect(() => {
        console.log(acceptedFiles)
        setFile(acceptedFiles[0])
    }, [acceptedFiles])

    return (
        <form className={style.product} onSubmit={handleSubmit(onSubmitProduct)}>
            <div {...getRootProps()}>
                <input type="file" {...register('img', { required: true })}  {...getInputProps()} />
                {
                    file
                        ? null
                        : isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            {
                file ? <ImagePreview file={file} clear={() => setFile(null)} /> : null
            }
            <label>Выберите категорию для товара</label>
            <select
                {
                    ...register('typeId', { required: true, pattern: /\d{1,}/ })
                }
            >
                <option value={null} selected> Please Select </option>
                {types.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                ))}
            </select>
            
            <label>Выберите бренд для товара</label>
            <select
                {
                    ...register('brandCountryId', { required: true, pattern: /\d{1,}/ })
                }
            >
                <option value={null} selected> Please Select </option>
                {brandsCountry.map(brand => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                ))}
            </select>
            
            <input type="text" {...register('name', { required: true })} />
            <input type="number" {...register('price1', { required: true, pattern: /\d{1,}/ })} />
            <input type="number" {...register('price10', { required: true, pattern: /\d{1,}/ })} />
            <input type="number" {...register('price50', { required: true, pattern: /\d{1,}/ })} />
            <button onClick={() => { append({ title: '', body: '' }) }}>Add Field</button>
            {
                fields.map((field, i) => {
                    return (
                        <div className={style.info_fields}>
                            <input type="text" {...register(`info.${i}.title`, { required: true })} />
                            <input type="text" {...register(`info.${i}.body`, { required: true })} />
                            <button onClick={ () => remove(i) }>Remove</button>
                        </div>
                    )

                })
            }
            <input type="submit" />
        </form>
    )
}



const ImagePreview = (props) => {
    console.log(props)
    return (
        <div className={style.image_preview}>
            <img src={URL.createObjectURL(props.file)} />
            <button onClick={() => props.clear()}>Clear</button>
        </div>
    )
}
