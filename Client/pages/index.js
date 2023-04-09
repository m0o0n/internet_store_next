import { MainLayout } from "../components/global/MainLayout";
import ProductsGrid from "../components/global/Product/ProductsGrid";
import { getAllProductsThunk } from "../store/Products/productsActions";
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
