import { useRouter } from "next/router";
import { useEffect } from "react";
import {Box, Text, Button, Heading} from '@chakra-ui/react'
export default function Quiz(){
    const router = useRouter();
    return(
        <>
          <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Heading>Quiz Time!</Heading>
            <Text>The button below will bring you to an external quiz site.</Text>
            <Button onClick={()=> window.open('https://quiz.popplays.tk')}>Start</Button>
          </Box>
        </>
    )
}