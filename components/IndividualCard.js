import { Box, Text, VStack, Image, scaleFadeConfig} from '@chakra-ui/react'
const IndiviDualCard = (props) => {
  return(
    <VStack cursor={'pointer'} borderRadius={'10px'} transform={'scale(1)'} _hover={{transform: 'scale(1.05)', borderColor: 'blue.500'}} transition={'ease-in-out 0.3s all'} border={'1px'} bg={'gray.50'} borderColor={'transparent'} overflow={'auto'} width={'340px'} spacing={'10px'}>
      <Image height='auto' 
      src={props.img} width={'100%'}/>
      <Box height={'100%'} padding={'50px 40px'}>
        <Text fontSize='25px'>
          {props.title}
        </Text>
      </Box>
    </VStack>
  )
}
export default IndiviDualCard