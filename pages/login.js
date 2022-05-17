import { useRouter } from 'next/router'
import {FormControl, useToast, Input, FormLabel, FormHelperText, FormErrorMessage} from '@chakra-ui/react'
import Cookie from 'js-cookie'
import {useState, useEffect} from 'react'
import $ from 'jquery'
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  HStack,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Login({}) {
  const router = useRouter()
const toast = useToast()
 const [input, setInput] = useState('')
  const [loading, setloading] = useState(false)
  const handleInputChange = (e) =>   setInput(e.target.value)
  
  const isError = input === ''

    function handleLogin(e){
      e.preventDefault()
      setloading(true)
      $.ajax({
        url: '/api/login',
        type: 'POST',
        data: $('form').serialize()
      }).then((res)=>{
        if( res.data == 'PASSWORD_VALID'){
          Cookie.set('login', 'yes')
          router.push('/')
        }
        if (res.data =='PASSWORD_WRONG'){
          toast({
            title: 'Warning',
            description: "Incorrect password.",
            status: 'warning',
            isClosable: true,
          })
          setloading(false)
        }
      }).catch(()=>{
        toast({
          title: 'Oops..',
          description: "An unexpected error occured.",
          status: 'error',
          isClosable: true,
        })
        setloading(false)
      })
    }
  return (
    <>
      <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form method='POST' style={{width: '300px'}} onSubmit={handleLogin}> 
        <h1 style={{fontSize: '50px', fontWeight: '700'}}>Login</h1>
        <br/>
        <FormControl isInvalid={isError}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            id='password'
            required
            name='code'
            type='password'
            value={input}
            onChange={handleInputChange}
          />
          <br/>
          <br/>
          
          <Button width={'100%'} colorScheme={'blue'} type='submit' isLoading={loading}>
            Login
          </Button>
        </FormControl>
          </form>
      </div>
    </>
  )
}



export async function getServerSideProps(context) {
  if (context.req.cookies.login){
    return{
      redirect: {
        permanent: false,
        destination: "/",
      },
  }
  } else {
    return {
      props: {}
    }
  }
}