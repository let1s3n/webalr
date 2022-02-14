// import App from 'next/app'
import { useState,useEffect } from 'react';
import { useRouter } from "next/router";
import SSRProvider from 'react-bootstrap/SSRProvider';


import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


import Layout from '../components/layout'
import Loader from '../components/loader'

import '../assets/sass/app.scss'

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // passes i18n down to react-i18next
  .use(HttpApi)
  .init({
    fallbackLng: "es",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: `${process.env.NEXT_PUBLIC_URL}data/locales/{{lng}}/translation.json`,
    },
    react: { useSuspense: false },

  });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <SSRProvider>
      <Loader loading={loading}/>
      <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* {!loading ?
        <Layout>
          <Component {...pageProps} />
        </Layout>
        :
        <Loader />
      } */}
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