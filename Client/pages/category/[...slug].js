import { wrapper } from "../../store/redux-store";
import ProductsGrid from "../../components/global/Product/ProductsGrid";
import { MainLayout } from "../../components/global/MainLayout";
import { getAllProductsThunk } from "../../store/Products/productsActions";
const Category = (props) => {
  console.log(props)
  return (
    <MainLayout>
      hi
      <ProductsGrid products={props.products} />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch, getState }) =>
    async (context) => {

      await dispatch(getAllProductsThunk({ typeId: Number(context.params.slug[0]) }));
      return {
        props: {
          params: context.params.slug,
          products: getState().Products
        },
      };
    }
);

export default Category;
