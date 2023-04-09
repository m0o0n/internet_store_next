import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, getAll } from "../../api/product";

export const getAllProductsThunk = createAsyncThunk(
  "product/getAll",
  async (thunkAPI) => {
    try {
      const response = await getAll(thunkAPI);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `An error occured can't get products: ${e.message}`
      );
    }
  }
);

export const createProductsThunk = createAsyncThunk(
  "product/create",
  async (thunkAPI) => {
    try {
      const {
        name,
        price1,
        price10,
        price50,
        typeId,
        brandCountryId,
        img,
        info,
      } = thunkAPI;
      const fd = new FormData();
      fd.append("name", name);
      fd.append("price1", Number(price1));
      fd.append("price10", Number(price10));
      fd.append("price50", Number(price50));
      fd.append("typeId", Number(typeId));
      fd.append("brandCountryId", Number(brandCountryId));
      fd.append("img", img);
      fd.append("info", JSON.stringify(info));
      const response = await create(fd);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `An error occured can't create product: ${e.message}`
      );
    }
  }
);
