import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from '../src/components/Header/Header'



function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
