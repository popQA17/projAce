import { Box, UnorderedList, ListItem, Text, Stack, HStack, Image, useMediaQuery} from '@chakra-ui/react'
const LegacyCard = (props) => {
  const [smalldevice] = useMediaQuery('(max-width: 850px)')
  return(
    <HStack height={'420px'} overflow='auto' alignItems='center' data-aos="zoom-in" spacing={'100px'} padding={'0px'}>
      <Image height='auto' 
      src={props.img} borderRadius={'10px'} width={smalldevice? '200px' : '300px'}/>
      <Box height={'100%'}>
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