import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/Homepage/Navbar';
import Footer from '../Components/Homepage/Footer';

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
