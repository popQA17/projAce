import { useRouter } from "next/router";
import { useEffect } from "react";
import {Box, Text, Button, Heading, useDisclosure, List, UnorderedList, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ListItem, ModalFooter} from '@chakra-ui/react'
export default function Quiz(){
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
          <Box display='flex' color='white' alignItems='center' height='100vh' justifyContent='center' flexDirection='column' 
        backgroundImage={
          'url(https://cdn.mos.cms.futurecdn.net/5pCA2Sgpfj9Vu8XcALuMtb.jpg)'
        }
        backgroundSize={'cover'}
        backgroundAttachment={'fixed'}
        backgroundPosition={'center'}>
          <Box display={'flex'} padding='50px' width='500px' borderRadius={'10px'} flexDirection='column' alignItems='center' background={'rgba(255, 255, 255, 0.22)'} backdropFilter={'blur(4px)'}>
            <Text fontWeight={700}  fontSize={'40px'}>Quiz</Text>
            <br/>
            <Button borderRadius={'25px'} colorScheme='blue' onClick={onOpen}>Start</Button>
          </Box>
          </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start Quiz?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            In order to start the quiz, you must ensure that you do not..
            <UnorderedList>
              <ListItem>leave the quiz site.</ListItem>
              <ListItem>communicate with others during the quiz.</ListItem>
              <ListItem>search on the web for the answers.</ListItem>
              <ListItem>exploit a weakness on the quiz site.</ListItem>
            </UnorderedList>
            <br/>
            <Text fontWeight={700} textColor='red.500'>Failing to comply with the rules will result in the deletion of your attempt, or your response will be submitted immediately.</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme={'blue'} onClick={()=>{
              onClose()
              window.location.replace('https://quiz.popplays.tk')
            }}>Start</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}