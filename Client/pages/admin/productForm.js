import { useForm } from "react-hook-form";
import { useDropzone } from 'react-dropzone';
import Dropzone from 'react-dropzone'
import React, { useCallback, useEffect, useState } from 'react'

export const ProductFrom = () => {
    const [file, setFile] = useState(null)
    const { register, handleSubmit, setValue } = useForm();
    const onSubmitProduct = (data) => {
        console.log(data)
    };
    const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({ onDrop: files => { setValue("file", files) } })
    useEffect(() => {
        console.log(acceptedFiles)
        setFile(acceptedFiles[0])
    }, [acceptedFiles])
    return (
        <form onSubmit={handleSubmit(onSubmitProduct)}>
            <div {...getRootProps()}>
                <input type="file" {...register('file', { required: true })}  {...getInputProps()} />
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
            <input type="text" {...register('name', { required: true })} />
            <input type="number" {...register('price1', { required: true, pattern: /\d{1,}/ })} />
            <input type="number" {...register('price10', { required: true, pattern: /\d{1,}/ })} />
            <input type="number" {...register('price50', { required: true, pattern: /\d{1,}/ })} />
            <input type="submit" />
        </form>
    )
}



const ImagePreview = (props) => {
    console.log(props)
    return (
        <div>
            <img src={URL.createObjectURL(props.file)} />
            <button style={{ margin: '50px 0 50px 0', }} onClick={() => props.clear()}>Clear</button>
        </div>
    )
}

{/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
{({ getRootProps, getInputProps }) => (
    <section>
        <div {...getRootProps()}>
            <input {...register('file', { required: true })} {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    </section>
)}
</Dropzone> */}