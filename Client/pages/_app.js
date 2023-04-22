import "../styles/globals.scss";
import { wrapper } from "../store/redux-store";
import { AuthThunk } from "../store/User/userActions";
import { getAllSubTypesThunk } from "../store/SubTypes/subTypesAction";
import { getAllTypesThunk } from "../store/Types/TypesAction";
import { getAllBrandsCountryThunk } from "../store/BrandCountry/brandCountryActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MyApp = ({ Component, pageProps, user }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AuthThunk())
  }, [user])
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await store.dispatch(getAllSubTypesThunk());
  await store.dispatch(getAllTypesThunk());
  await store.dispatch(getAllBrandsCountryThunk());
  return { user: store.getState().User.user }
});
export default wrapper.withRedux(MyApp);
