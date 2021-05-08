import { useEffect } from 'react'
import { wrapper } from '../store';
import { useStore } from 'react-redux'
import Head from 'next/head';
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const store: any = useStore()

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp);
