import { Box, UnorderedList, ListItem, Text, Stack, HStack, Image} from '@chakra-ui/react'
const LegacyCard = (props) => {
  return(
    <HStack height={'420px'} data-aos="zoom-in" spacing={'100px'} padding={'0px 300px'}>
      <Image height='auto' 
      src={props.img} borderRadius={'10px'} width={'360px'}/>
      <Box height={'100%'} padding={'20px'}>
        <Text fontSize='30px'>
          {props.title}
        </Text>
        <br/>
        <br/>
        {props.children}
      </Box>
    </HStack>
  )
}
export default LegacyCard