

import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Head>
      <title>Legacies of Ancient China | Project Ace 2022</title>
      <meta name="description" content="Created for Project ACE! 2022. Joel, Qi An, Joab, Jian Si" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>  
  )
}

export default MyApp
