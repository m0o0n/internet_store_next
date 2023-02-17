import '../styles/globals.scss'
import { Provider, useSelector } from 'react-redux'
import store from '../store/redux-store'
import { useEffect } from 'react'
import { AuthThunk } from '../store/User/userActions'
function MyApp({ Component, pageProps }) {
  useEffect(()=> {
    store.dispatch(AuthThunk())
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
