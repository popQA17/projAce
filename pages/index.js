import { useRouter } from 'next/router'
import {FormControl, useToast, Input, FormLabel, FormHelperText, FormErrorMessage, OrderedList, ListItem} from '@chakra-ui/react'
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
      <Box display={'flex'} width='99vw' alignItems='center' flexDirection={'column'}>
        <Box marginTop={'50px'} >
          <Text display={'flex'} width={'100%'} justifyContent={'center'} fontWeight={'600'} textAlign={'center'} fontSize={'40px'}>
            Dynasties of Ancient China
          </Text>
          <br/>
          <OrderedList>
            <ListItem fontSize={'17px'}>Xia Dynasty (c. 2070-1600 BC) </ListItem>
            <ListItem fontSize={'17px'}>Shang Dynasty (c. 1600-1050 BC)</ListItem>
            <ListItem fontSize={'17px'}>Zhou Dynasty (c. 1046-256 BC)</ListItem>
            <ListItem fontSize={'17px'}>Qin Dynasty (221-206 BC)</ListItem>
            <ListItem fontSize={'17px'}>Han Dynasty (206 BCE-220 AD)</ListItem>
            <ListItem fontSize={'17px'}>Six Dynasties Period</ListItem>
            <ListItem fontSize={'17px'}>Sui Dynasty (581-618)</ListItem>
            <ListItem fontSize={'17px'}>Tang Dynasty (618-906)</ListItem>
            <ListItem fontSize={'17px'}>Five Dynasties Period, Ten Kingdoms (907-960)</ListItem>
            <ListItem fontSize={'17px'}>Song Dynasty (960-1279)</ListItem>
            <ListItem fontSize={'17px'}>Yuan Dynasty (1279-1368)</ListItem>
            <ListItem fontSize={'17px'}>Ming Dynasty (1368-1644)</ListItem>
            <ListItem fontSize={'17px'}>Qing Dynasty (1644-1912)</ListItem>
          </OrderedList>
        </Box>
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