import { Box, Text, VStack, Image} from '@chakra-ui/react'
const IndiviDualCard = (props) => {
  return(
    <VStack borderRadius={'10px'} border={'1px'} borderColor={'blue.500'} overflow={'auto'} width={'340px'} bg={'gray.50'} data-aos="zoom-in" spacing={'10px'}>
      <Image height='auto' 
      src={props.img} width={'100%'}/>
      <Box height={'100%'} padding={'50px 40px'}>
        <Text fontSize='30px'>
          {props.title}
        </Text>
      </Box>
    </VStack>
  )
}
export default IndiviDualCard