import { wrapper } from "../../store/redux-store";
import ProductsGrid from "../../components/global/Product/ProductsGrid";
import { MainLayout } from "../../components/global/MainLayout";
const Category = (props) => {
  console.log(props)
  return (
    <MainLayout>
      hi
      {/* <ProductsGrid /> */}
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch, getState }) =>
    async (context) => {
      
        
        return {
          props: {
            params: context.params.slug
          },
        };
    }
);

export default Category;
