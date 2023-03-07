import "../styles/globals.scss";
import { Provider, useSelector } from "react-redux";
import { wrapper } from "../store/redux-store";
import { useEffect } from "react";
import { AuthThunk } from "../store/User/userActions";

import { getAllSubTypesThunk } from "../store/SubTypes/subTypesAction";
import { getAllTypesThunk } from "../store/Types/TypesAction";
import { getAllBrandsCountryThunk } from "../store/BrandCountry/brandCountryActions";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await store.dispatch(getAllSubTypesThunk());
  await store.dispatch(getAllTypesThunk());
  await store.dispatch(getAllBrandsCountryThunk());
});
export default wrapper.withRedux(MyApp);
