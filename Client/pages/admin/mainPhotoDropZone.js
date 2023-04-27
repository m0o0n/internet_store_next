import { useDropzone } from "react-dropzone";
import React, { useEffect } from "react";
import { IconCloud } from "../../components/global/Icons/IconCloud";
import style from "./admin.module.scss";
import { ImagePreview } from "./imagePreview";

export const MainPhotoDropZone = ({ setValue, register, file, setFile }) => {

    const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
        useDropzone({
            onDrop: (files) => {
                setValue("img", files);
            },
        });

    useEffect(() => {
        console.log(acceptedFiles)
        setFile(acceptedFiles[0]);
    }, [acceptedFiles]);

    return (
        <>
            <div className={style.product__avatar__container} {...getRootProps()}>
                <input
                    type="file"
                    {...register()}
                    {...getInputProps()}
                />
                {file ? null : isDragActive ? (
                    <div>
                        <IconCloud />
                        <p>Drop the files here ...</p>
                    </div>
                ) : (
                    <div>
                        <IconCloud />
                        <p>Chose Main Photo</p>
                    </div>
                )}
                {file ? <ImagePreview file={file} clear={() => setFile(null)} /> : null}
            </div>
        </>
    )
}