import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';




export default function Home() {
  return (
      <div>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://cdn.mos.cms.futurecdn.net/5pCA2Sgpfj9Vu8XcALuMtb.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
        <div/>     
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          >
          <Stack maxW={'2xl'} p={'100px'} background={'rgba(255, 255, 255, 0.22)'} backdropFilter={'blur(5px)'}  align={'flex-start'} spacing={6}>
            <HStack>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Legacies of
            </Text>
            <Text 
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              color='white'
              textDecoration={'underline'}
              textDecorationColor={'blue.400'}
              textDecorationThickness={'6px'}
              >Ancient China</Text>
            </HStack>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                colorScheme={'blue'}
                _hover={{ bg: 'blue.500' }}>
                Learn more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Legacies
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      </div>
  )
}
