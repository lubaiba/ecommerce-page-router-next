import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
   <Header/>
   <Component {...pageProps} />
   <Footer/>
</>
  )
}
