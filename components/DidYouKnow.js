import { Box, Spacer, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
const DidYouKnow = (props) =>{
  const [rightOffset, setrightOffset] = useState('-250px')
  useEffect(()=>{
    setTimeout(()=>{
      setrightOffset('0px')
    }, 1000)

  }, [])
  return(
    <Box zIndex={'1000'} position={props.position} transition={'ease-in-out 0.5s all'} right={rightOffset} opacity={rightOffset== '-400px' ? '0' : '1'} transform={props.centered && 'translate(-0%, -50%)'} top={props.centered && '50%'} bottom={props.bottom} bg={'blue.300'} width='250px' color={'white'} borderRadius={'5px'} p={'4'}>
      <Box display={'flex'} alignItems='center'>
        <Box color={'blue.500'} p={'4'} display='flex' alignItems={'center'} justifyContent='center' bg='white' w='40px' h='40px' fontSize={'22px'} borderRadius={'100%'} fontWeight='extrabold'>?</Box>
        <Text marginLeft={'10px'} fontWeight='600' fontSize='17px'>Did you know...</Text>
      </Box>
      <Box marginTop={'20px'}>
        <Text fontSize={'15px'} fontWeight='550'>{props.text}</Text>
      </Box>
    </Box>
  )
}

export default DidYouKnow