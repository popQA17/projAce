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


export default function Home() {
  const router = useRouter()
  return (
      <div>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://cdn.mos.cms.futurecdn.net/5pCA2Sgpfj9Vu8XcALuMtb.jpg)'
        }
        backgroundSize={'cover'}
        backgroundAttachment={'fixed'}
        backgroundPosition={'center'}
        >
        <div/>     
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          >
          <Stack maxW={'2xl'} p={'100px'} background={'rgba(255, 255, 255, 0.22)'} backdropFilter={'blur(2.5px)'}  align={'flex-start'} spacing={6}>
            <HStack>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Legacies of <span style={{textDecoration:'underline', textDecorationColor:'#4299E1', textDecorationThickness:'6px'}}>Ancient China</span>
            </Text>
            </HStack>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                colorScheme={'blue'}
                _hover={{ bg: 'blue.500' }}
                onClick={() => {
                  router.push('/quiz')
                }}
                >
                Take a Quiz
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
                onClick={() => {
                  router.push('/legacies')
                }}
                >
                Legacies
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
        <Box marginTop={'50px'}>
          <Text display={'flex'} width={'100%'} justifyContent={'center'} fontWeight={'600'} textAlign={'center'} fontSize={'40px'}>
            Dynasties of <Text fontWeight={'600'} fontSize={'40px'} 
              textDecoration={'underline'}
              textDecorationColor={'blue.400'}
              textDecorationThickness={'6px'}> Ancient China</Text>
          </Text>
        </Box>
      </div>
  )
}

export async function getServerSideProps(context) {
  if (!context.req.cookies.login){
    
  return{
    redirect: {
      permanent: false,
      destination: "/login",
    },
  }
  } else {
    return {
      props: {}
    }
  }
}