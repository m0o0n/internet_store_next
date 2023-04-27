import { useDropzone } from "react-dropzone";
import React, { useEffect } from "react";
import style from "./admin.module.scss";
import { ImagePreview } from "./imagePreview";
import { IconImages } from "../../components/global/Icons/IconImages";

export const AllPhotsDropZone = ({ setValue, register, files, setFiles }) => {
    const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
        useDropzone({
            onDrop: (files) => {
                console.log("click")
                setValue("images", files);
            },
        });

    useEffect(() => {
        setFiles([...files, ...acceptedFiles]);
    }, [acceptedFiles]);

    return (
        <>
            <div className={style.product__galery__container} {...getRootProps()}>
                <input
                    type="file"
                    {...register()}
                    {...getInputProps()}
                />
                {files.length
                    ? isDragActive ? (
                        <div>
                            <IconImages />
                            <p>Drop more files here ...</p>
                        </div>
                    ) : (
                        <div>
                            <IconImages />
                            <p>Add more Images for Product</p>
                        </div>

                    )
                    : isDragActive
                        ? (
                            <div>
                                <IconImages />
                                <p>Drop the files here ...</p>
                            </div>
                        ) : (
                            <div>
                                <IconImages />
                                <p>Chose Images for Product</p>
                            </div>

                        )}
            </div>

            {files
                ?
                <div className={style.product__galery__tumbs}>{files.map(file => {
                    return (
                        <ImagePreview galery={true} file={file} clear={() => setFiles([...files.filter(el => el !== file)])} />
                    )
                })}
                </div>
                : null}


        </>
    )
}