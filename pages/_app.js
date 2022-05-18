import NextNProgress from "nextjs-progressbar";
import { Box, ChakraProvider, extendTheme, Heading, Spinner, Text } from '@chakra-ui/react'
import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import $ from 'jquery'
import { setConfig } from "next/config";
import { motion } from "framer-motion"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(()=>{
    AOS.init({
				easing: 'ease-out-back',
				duration: 1000
		})
  }, [])
  const container = {
    hidden: { 
      opacity: 1 
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    transition: {duration: 1},
    show: { opacity: 1, scale: 1 }
  }
  
  const [loaded, setloaded] = useState('completed')
  const [content, setcontent] = useState('')
  function StartLoading(){
    setTimeout(() => {
      setcontent(
        <>
          <motion.div style={{textAlign: 'center'}} transition={{delay: 5, duration: 1.5, type: 'linear'}} initial={{opacity: 1}} animate={{opacity: 0}}>
          <motion.div transition={{duration: 1.5, type: 'linear'}} initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1 }}>
          <img src='https://i.imgur.com/yVrUcGT.png' height='200px' width='200px'/>
          </motion.div>
            <motion.div transition={{delay: 2, duration: 1, type: 'linear'}} initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0 }}>
            <Heading color={'white'} fontSize='30px'>Ancient China</Heading>
            </motion.div>
          </motion.div>
        </>
      )
  }, 2000)
  setTimeout(()=>{
    setcontent(
      <>
        <motion.div transition={{duration: 1.5, type: 'linear'}} initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1 }}>
        <Box textAlign={'center'}>
          <Heading color={'white'} fontSize='30px'>Proudly Presented by:</Heading>
          <Heading fontFamily={'Comfortaa'} fontSize={'50px'} color='blue.400'>Group 4</Heading>
        </Box>
      </motion.div>
      </>
    )
  }, 9000)
  setTimeout(()=>{
    setloaded('completed')
  }, 15000)
  }
  /*useEffect(()=>{
    StartLoading()
  }, []) */
  /*useEffect(()=>{
    const loadFallback = setTimeout(()=>{
      $('.preloader').addClass('preloaded')
      setloaded('starting')
      StartLoading()
    }, 5000)
    window.addEventListener('load', function () {
      if (loaded == false){
        clearTimeout(loadFallback)
        $('.preloader').addClass('preloaded')
        setloaded('starting')
        StartLoading()
      }
    }) 
  
  }, [])*/
  const theme = extendTheme({
    fonts: {
      heading: 'Amatic SC, Arial',
      body: 'Comfortaa, Arial',
    },
  })
  
  return (
  <ChakraProvider theme={theme}>
    <Head>  
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <title>Legacies of Ancient China | Project Ace 2022</title>
      <meta name="description" content="Created for Project ACE! 2022. Joel, Qi An, Joab, Jian Si" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NextNProgress />
    <Box className={'preloader'} display='flex'  backdropFilter={'blur(100px)'} justifyContent={'center'} alignItems='center' transition='ease-in-out 1s opacity' height={'100vh'} width={'100vw'} zIndex={'1001'} position={'fixed'} bg={'transparent'} top={loaded== 'completed' &&  '100vh'} pointerEvents={'intitial'}>
      
        <Box>
        <motion.div   transition={{delay: 15}} initial={{scale: 1, opacity: 1}} animate={{scale: 0.9, opacity: 0}}>{content}</motion.div>
        </Box>
    </Box>
    <Navbar/>
    <Component {...pageProps} />
    
  </ChakraProvider>  
  )
}

export default MyApp
