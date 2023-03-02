import '../styles/globals.scss'
import { Provider, useSelector } from 'react-redux'
import store from '../store/redux-store'
import { useEffect } from 'react'
import { AuthThunk } from '../store/User/userActions'

import { getAllSubTypesThunk } from '../store/SubTypes/subTypesAction'
import { getAllTypesThunk } from '../store/Types/TypesAction'
import { getAllBrandsCountryThunk } from '../store/BrandCountry/brandCountryActions'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(AuthThunk())
    store.dispatch(getAllSubTypesThunk());
    store.dispatch(getAllTypesThunk());
    store.dispatch(getAllBrandsCountryThunk());
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}


export default MyApp
