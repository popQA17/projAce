import NextNProgress from "nextjs-progressbar";
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import {useEffect} from 'react'
import {useRouter} from 'next/router'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(()=>{
    AOS.init({
				easing: 'ease-out-back',
				duration: 1000
		})
  }, [])
  return (
  <ChakraProvider>
    <Head>  
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <title>Legacies of Ancient China | Project Ace 2022</title>
      <meta name="description" content="Created for Project ACE! 2022. Joel, Qi An, Joab, Jian Si" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NextNProgress />
    <Navbar/>
    <Component {...pageProps} />
    
  </ChakraProvider>  
  )
}

export default MyApp
