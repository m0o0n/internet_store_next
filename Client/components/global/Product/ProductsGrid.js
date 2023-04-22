import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsThunk } from "../../../store/Products/productsActions";
// import store from "../../../store/redux-store";
import { wrapper } from "../../../store/redux-store";
import style from "./Product.module.scss";
import { ProductCard } from "./ProductCard";

const ProductsGrid = ({ products }) => {
  return (
    <div className={style.catalog}>
      <div className={style.catalog__filters}></div>
      <div className={style.catalog__grid}>
        {products.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              price1={product.price1}
              price10={product.price10}
              price50={product.price50}
            />
          );
        })}
      </div>
      <div className={style.catalog__pagination}></div>
    </div>
  );
};

export default ProductsGrid;
