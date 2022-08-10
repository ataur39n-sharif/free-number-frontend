import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Homepage/Footer';
import NavBar from '../Components/Homepage/Navbar';
import "../styles/all_countries.css";
import '../styles/globals.css';
import "../styles/social_share.css";

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
