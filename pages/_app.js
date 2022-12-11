// import App from 'next/app'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from 'next/head'

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import '../assets/sass/app.scss'

import Default from '../components/layout/Default/Default'
import Loader from '../components/elements/Loader/Loader'

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
    ns: ['general'],
    defaultNS: 'general',
    backend: {
      loadPath: `${process.env.NEXT_PUBLIC_URL}data/locales/{{lng}}/{{ns}}.json`,
    }

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

  useEffect(() => {
    console.log(`${process.env.NEXT_PUBLIC_URL}data/locales/{{lng}}/translation.json`);
    console.log(`${process.env.NEXT_PUBLIC_URL}`);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <SSRProvider>
        <Loader loading={loading} />
        <Default>
          <Component {...pageProps} />
        </Default>
      </SSRProvider>
    </>
  )
}
export default MyApp