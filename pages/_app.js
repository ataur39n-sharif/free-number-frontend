import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Homepage/Footer';
import NavBar from '../Components/Homepage/Navbar';
import "../styles/all_countries.css";
import '../styles/globals.css';
import "../styles/social_share.css";
import 'antd/dist/antd.css';
import Head from 'next/head';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="icon" href="/image/favicon_free-number-logo.png" />
        <meta name="google-site-verification" content="wk-WEHa5B0KzVRrubMPJhtwgZ1yDMQezezPaLD7S-lY" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LDYT60EWVX"></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-LDYT60EWVX');
        `,
        }}
      />
      < NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
