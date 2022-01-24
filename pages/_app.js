// import App from 'next/app'

import SSRProvider from 'react-bootstrap/SSRProvider';


/* import '../assets/sass/app.scss' */
import Layout from '../components/layout'
import { useEffect } from 'react';
import '../assets/sass/app.scss'


function MyApp({ Component, pageProps }) {
 
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return {...appProps}
// }

export default MyApp