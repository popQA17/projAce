import { Box, Text, Stack, HStack, Image} from '@chakra-ui/react'
import IndividualCard from '../components/IndividualCard'
export default function Home() {
  return (
    <div>
      <Box textAlign={'center'} padding={'100px 0'} background={'gray.100'}
        height={'500px'}
        display={'flex'}
        backgroundImage={
          'url(https://cdn.mos.cms.futurecdn.net/5pCA2Sgpfj9Vu8XcALuMtb.jpg)'
        }
        backgroundSize={'cover'}
        backgroundAttachment={'fixed'}
        backgroundPosition={'center'}
        alignItems={'center'}
        justifyContent={'center'}
        >
        <Text padding={'50px 0'} fontWeight={700} 
              textDecoration={'underline'}
              textDecorationColor={'blue.400'}
              textDecorationThickness={'6px'} borderRadius={'10px'} width={'40%'} background={'rgba(255, 255, 255, 0.22)'} backdropFilter={'blur(4px)'} fontSize={'40px'} color={'#fff'}>
          Legacies
        </Text>
      </Box>
        <HStack spacing={'20px'} padding={'100px 50px'}>
          <IndividualCard img='https://i.pinimg.com/originals/8b/dd/8b/8bdd8be0b338022d69ac8e4e8ab1dc09.jpg' title='Navigation'/>
        </HStack>
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