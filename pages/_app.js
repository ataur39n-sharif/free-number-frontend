import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Homepage/Footer';
import NavBar from '../Components/Homepage/Navbar';
import "../styles/all_countries.css";
import '../styles/globals.css';
import "../styles/social_share.css";
import 'antd/dist/antd.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="icon" href="/image/favicon_free-number-logo.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
