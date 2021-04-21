import { useEffect } from 'react';
import withRedux from 'next-redux-wrapper';
import { useStore } from 'react-redux'
import { wrapper } from '@store'
import Head from 'next/head';
import '../../styles/globals.css'
import { useSelector } from 'react-redux'

function WrappedApp({ Component, pageProps }) {

  const { show } = useSelector((state: any) => state.loader)
  const store = useStore()

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

export default wrapper.withRedux(WrappedApp);
