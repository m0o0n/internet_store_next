import { useForm, useFieldArray } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./admin.module.scss";
import { createProductsThunk } from "../../store/Products/productsActions";

export const ProductFrom = () => {
  const dispatch = useDispatch();

  const { register, reset, handleSubmit, setValue, control } = useForm({
    defaultValues: {
      info: [],
      img: [null],
      typeId: "Please Select",
      brandCountryId: "Please Select",
      name: "",
      price1: "",
      price10: "",
      price50: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "info",
  });

  const [file, setFile] = useState(null);

  const [subTypeStepID, setSubTypeStepID] = useState(null);

  const [disableStep, setDisableStep] = useState([true, ""]);

  const types = useSelector((state) => state.Types.types);

  const subTypes = useSelector((state) => state.SubTypes.subtypes);

  const brandsCountry = useSelector(
    (state) => state.BrandsCountry.brandsCountry
  );

  const choseCategory = (e) => {
    let value = e.target.value;
    if (!!parseInt(value)) {
      setDisableStep([false, parseInt(value)]);
    } else {
      setDisableStep([true, ""]);
    }
  };

  const nextStep = (e, id) => {
    e.preventDefault();
    setSubTypeStepID(id);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setSubTypeStepID(null);
    setDisableStep([true, ""]);
  };

  const onSubmitProduct = (data) => {
    const {
      name,
      price1,
      price10,
      price50,
      typeId,
      brandCountryId,
      img,
      info,
    } = data;
    dispatch(
      createProductsThunk({
        name,
        price1,
        price10,
        price50,
        typeId,
        brandCountryId,
        img: img[0],
        info,
      })
    );
    console.log(data, img[0]);
    reset();
    setFile(null);
    setDisableStep([true, ""]);
  };

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      onDrop: (files) => {
        setValue("img", files);
      },
    });

  useEffect(() => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, [acceptedFiles]);

  return (
    <form className={style.product} onSubmit={handleSubmit(onSubmitProduct)}>
      <div {...getRootProps()}>
        <input
          type="file"
          {...register("img", { required: true })}
          {...getInputProps()}
        />
        {file ? null : isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {file ? <ImagePreview file={file} clear={() => setFile(null)} /> : null}

      {!subTypeStepID ? (
        <div>
          <label>Выберите раздел для товара</label>
          <select onChange={(e) => choseCategory(e)}>
            <option value={null} selected>
              Please Select
            </option>
            {subTypes.map((subtype) => (
              <option key={subtype.id} value={subtype.id}>
                {subtype.name}
              </option>
            ))}
          </select>
          <button
            disabled={disableStep[0]}
            onClick={(e) => nextStep(e, disableStep[1])}
          >
            Next
          </button>
        </div>
      ) : (
        <div>
          <label>Выберите категорию для товара</label>
          <select
            {...register("typeId", { required: true, pattern: /\d{1,}/ })}
          >
            <option value={null} selected>
              Please Select
            </option>
            {types
              .filter((el) => el.subTypeId == subTypeStepID)
              .map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
          </select>
          <button onClick={(e) => prevStep(e)}>Back</button>
        </div>
      )}

      <label>Выберите бренд для товара</label>
      <select
        {...register("brandCountryId", { required: true, pattern: /\d{1,}/ })}
      >
        <option value={null} selected>
          {" "}
          Please Select{" "}
        </option>
        {brandsCountry.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>

      <input type="text" {...register("name", { required: true })} />
      <input
        type="number"
        {...register("price1", { required: true, pattern: /\d{1,}/ })}
      />
      <input
        type="number"
        {...register("price10", { required: true, pattern: /\d{1,}/ })}
      />
      <input
        type="number"
        {...register("price50", { required: true, pattern: /\d{1,}/ })}
      />
      <button
        onClick={() => {
          append({ title: "", body: "" });
        }}
      >
        Add Field
      </button>
      {fields.map((field, i) => {
        return (
          <div className={style.info_fields}>
            <input
              type="text"
              {...register(`info.${i}.title`, { required: true })}
            />
            <input
              type="text"
              {...register(`info.${i}.body`, { required: true })}
            />
            <button onClick={() => remove(i)}>Remove</button>
          </div>
        );
      })}
      <input type="submit" disabled={!subTypeStepID} />
    </form>
  );
};

const ImagePreview = (props) => {
  console.log(props);
  return (
    <div className={style.image_preview}>
      <img src={URL.createObjectURL(props.file)} />
      <button onClick={() => props.clear()}>Clear</button>
    </div>
  );
};
