import { Box, UnorderedList, ListItem, Text, Stack, HStack, Image, useMediaQuery, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Drawer, DrawerCloseButton, VStack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { useIsOverflow } from './useIsOverflow'
const LegacyCard = (props) => {
  const [smalldevice] = useMediaQuery('(max-width: 850px)')
  const ref = React.useRef();
  const isOverflow = useIsOverflow(ref);
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(()=>{
    if (isOverflow){
    }
  }, [isOverflow])
  return(
    <>
    <Drawer placement={'bottom'} size='full' onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader borderBottomWidth='1px'>{props.title}</DrawerHeader>
      <DrawerBody>
      <VStack ref={ref} alignItems='center' justifyContent='center' spacing={'50px'} padding={'0px'}>
        <Image height='auto' 
        src={props.img} borderRadius={'10px'} width={'300px'}/>
        <Box height={'100%'}>
          <Text fontSize='30px'>
            {props.title}
          </Text>
          <br/>
          <br/>
          <Box width='100%'>
            {props.children}
        </Box>
        </Box>
      </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
    <HStack ref={ref} height={'420px'} overflowY='hidden' alignItems='center' data-aos="zoom-in" spacing={'100px'} padding={'0px'}>
      {props.img && <Image height='auto' 
      src={props.img} borderRadius={'10px'} width={smalldevice? '200px' : '300px'}/>
  }
      <Box height={'100%'}>
        <Text fontSize='30px'>
          {props.title}
        </Text>
        <br/>
        <br/>
        <Box overflow={'hidden'} height={'150px'}>
          {props.children}
        </Box>
        <Box textAlign='right'>
          <Button onClick={onOpen} margin={'25px 0'}>View more</Button>
        </Box>
      </Box>
    </HStack>
    </>
  )
}
export default LegacyCard