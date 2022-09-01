import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import store from '../redux/store';
import { Provider } from 'react-redux'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>

    <Head>
      <title>Emilia Romagna - pizzeria w Raciborzu</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
}

export default MyApp
