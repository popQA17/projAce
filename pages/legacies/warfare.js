import {useRouter} from 'next/router'
import { Box, UnorderedList, ListItem, Text, Stack, HStack, Image, useMediaQuery} from '@chakra-ui/react'
import LegacyCard from '../../components/LegacyCard'
import DidYouKnow from '../../components/DidYouKnow'
export default function Navigation(){
  const router = useRouter()
  const [smalldevice] = useMediaQuery('(max-width: 850px)')
  return(
    <div>
      <Box 
        textAlign={'center'}  
        padding={'100px 0'} 
        background={'gray.100'} 
        backgroundImage={
          'url(https://i0.wp.com/welcometochina.com.au/wp-content/uploads/2018/05/qin-war.jpg)'
        }
        height={'500px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        backgroundSize={'cover'}
        backgroundAttachment={'fixed'}
        backgroundPosition={'center'}

        backgroundColor={'rgba(0,0,0,.5)'} /* Tint color */
        backgroundBlendMode={'multiply'}
        >
        <Text padding={'50px 0'} fontWeight={700} 
              textDecoration={'underline'}
              textDecorationColor={'blue.400'}
              textDecorationThickness={'6px'} borderRadius={'10px'} width={'40%'} background={'rgba(255, 255, 255, 0.22)'} backdropFilter={'blur(4px)'} fontSize={'40px'} color={'#fff'}>
          Warfare
        </Text>
      </Box>
      <Box width={'100%'} display='flex' justifyContent='center'>
        <Stack spacing={'20px'}   padding={'100px 50px'}  width={smalldevice ? '99vw' : '70vw'}>
          <LegacyCard title='Gunpowder' img='https://static.turbosquid.com/Preview/001169/812/VX/3D-gunpowder-loose_1200.jpg'>
            <UnorderedList>
              <ListItem fontSize="17px">Gunpowder is the first explosive made.</ListItem>
              <ListItem fontSize="17px">Gunpowder is one of the 4 great invention of china and was developed later in the Tang dynasty (900AD)</ListItem>  
              <ListItem fontSize="17px">Gunpowder is considered as a legacy as knowledge of gunpowder spread throughout the world and is still used today.(eg. Fireworks) 

</ListItem>  
            </UnorderedList>
          </LegacyCard>
          <LegacyCard title='Swords' img='https://i.imgur.com/Uu7rlej.png'>
              <UnorderedList>
                <ListItem fontSize="17px">There are 2 types of Chinese swords Jian (swords) and dao (knife)</ListItem>
                <ListItem fontSize="17px">Bronze swords appeared during the western Zhou period</ListItem>
                <ListItem fontSize="17px">Chinese swords were usually 70-110 cm long</ListItem>

              </UnorderedList>
            </LegacyCard>
            <LegacyCard title='The Great Wall of China' img='https://www.precisionvaccinations.com/sites/default/files/styles/article_2x/public/the-great-wall-2190047_0.jpg'>
              <UnorderedList>
                <ListItem fontSize="17px">The Great Wall of China is now a scenic route, however it was not always peaceful. In fact it was the opposite.</ListItem>
                <ListItem fontSize="17px">The Great Wall of China was used in some Dynasties for example the Han Dynasty to protect its people.</ListItem>
                <ListItem fontSize="17px">The plate is engraved with various constellations and symbols. The bronze slab was moved in a north-south direction.</ListItem>

              </UnorderedList>
            </LegacyCard>
        </Stack>
        </Box>
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