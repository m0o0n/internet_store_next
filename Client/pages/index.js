import { useSelector } from "react-redux";
import { MainLayout } from "../components/global/MainLayout";
import { ProductCard } from "../components/global/Product/ProductCard";
import ProductsGrid from "../components/global/Product/ProductsGrid";
import { getAllProductsThunk } from "../store/Products/productsActions";
import { getAllSubTypesThunk } from "../store/SubTypes/subTypesAction";
import { setCount } from "../store/Products/productsReducer";
import { wrapper } from "../store/redux-store";

const Home = ({ subtypes, products }) => {
  return (
    <MainLayout title={"Home Page"}>
      <ProductsGrid products={products} />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch, getState }) =>
    async () => {
      await dispatch(getAllProductsThunk());
      return {
        props: {
          subtypes: getState().SubTypes.subtypes,
          products: getState().Products,
        },
      };
    }
);

export default Home;
