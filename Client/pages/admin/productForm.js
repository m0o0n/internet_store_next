import { useForm, useFieldArray } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./admin.module.scss";
import { createProductsThunk } from "../../store/Products/productsActions";
import { MainPhotoDropZone } from "./mainPhotoDropZone";
import { AllPhotsDropZone } from "./allPhotosDropZone";
import { IconTrash } from "../../components/global/Icons/IconTrash";

export const ProductFrom = () => {
  const dispatch = useDispatch();

  const { register, reset, handleSubmit, setValue, control } = useForm({
    defaultValues: {
      info: [],
      img: [null],
      images: [null],
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

  const [files, setFiles] = useState([]);

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
      images,
      info,
    } = data;
    console.log(data)
    dispatch(
      createProductsThunk({
        name,
        price1,
        price10,
        price50,
        typeId,
        brandCountryId,
        img: img[0],
        images: images,
        info,
      })
    );
    reset();
    setFile(null);
    setDisableStep([true, ""]);
  };


  return (
    <form className={style.product} onSubmit={handleSubmit(onSubmitProduct)}>

      <div className={style.product__avatar}>
        <MainPhotoDropZone
          setValue={setValue}
          register={() => register("img", { required: true })}
          file={file}
          setFile={setFile}
        />
      </div>

      <div className={style.product__galery}>
        <AllPhotsDropZone
          setValue={setValue}
          register={() => register("images", { required: true })}
          files={files}
          setFiles={setFiles}
        />
      </div>


      {!subTypeStepID ? (
        <div className={style.product__categories_steps}>
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
            Next 	&#8594;
          </button>
        </div>
      ) : (
        <div className={style.product__categories_steps}>
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

      <input
        type="text"
        {...register("name", { required: true })}
        placeholder="Введите название товара"
      />
      <input
        type="number"
        {...register("price1", { required: true, pattern: /\d{1,}/ })}
        placeholder="Введите цену за 1 метр товара"
      />
      <input
        type="number"
        {...register("price10", { required: true, pattern: /\d{1,}/ })}
        placeholder="Введите цену за 10 метров товара"
      />
      <input
        type="number"
        {...register("price50", { required: true, pattern: /\d{1,}/ })}
        placeholder="Введите цену за 50 метров товара"
      />
      <button className={style.margin}
        onClick={() => {
          append({ title: "", body: "" });
        }}
      >
        Add Field
      </button>
      {fields.map((field, i) => {
        return (
          <div className={style.product__info_fields}>
            <input
              type="text"
              {...register(`info.${i}.title`, { required: true })}
            />
            <input
              type="text"
              {...register(`info.${i}.body`, { required: true })}
            />
            <button onClick={() => remove(i)}><IconTrash /></button>
          </div>
        );
      })}
      <input type="submit" disabled={!subTypeStepID} />
    </form>
  );
};