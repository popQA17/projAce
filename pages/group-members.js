import {useRouter} from 'next/router'
import { Box, UnorderedList, ListItem, Text, Stack, HStack, Image, useMediaQuery} from '@chakra-ui/react'
import LegacyCard from '../components/LegacyCard'
import DidYouKnow from '../components/DidYouKnow'
export default function Home() {
    const router = useRouter()
    const [smalldevice] = useMediaQuery('(max-width: 850px)')
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
          Group Members
        </Text>
      </Box>
        <Box width={'100%'} display='flex' justifyContent='center'>
        <Stack spacing={'20px'}   padding={'100px 50px'}  width={smalldevice ? '99vw' : '60vw'}>
          <LegacyCard title='Joel' img='https://i.pinimg.com/originals/8b/dd/8b/8bdd8be0b338022d69ac8e4e8ab1dc09.jpg'>
            <UnorderedList>
              <ListItem fontSize="17px">The ancient compass was invented in ancient China by the Han dynasty in 200 BC and was an important tool for navigation. The ancient compass was used for checking directions when going sailing  in the sea.</ListItem>
              <ListItem fontSize="17px">In those times, the ancient compass was called the ‘South Pointing Fish’ and ‘South-Pointer’. It was used to maintain peace and prosperity and to tell the future.</ListItem>  
            </UnorderedList>
          </LegacyCard>
          <LegacyCard title='Qi An' img='https://www.nationsonline.org/oneworld/Chinese_Customs/images/Bagua_Life.jpg'>
              <UnorderedList>
                <ListItem fontSize="17px">It was believed that if your house or office was in the right direction, you will be healthy and wealthy. This practice is known as feng shui. It was also used for geomancy to order the buildings and harmonize the surroundings.</ListItem>
              </UnorderedList>
            </LegacyCard>
            <LegacyCard title='Jian Si' img='https://media.sciencephoto.com/image/c0055846/800wm/C0055846-Lodestone.jpg'>
              <UnorderedList>
                <ListItem fontSize="17px">The ancient compass, or ancient Chinese compass, was originally made of magnetite (a natural magnet) along with a bronze plate. The magnetite spoon always pointed south. </ListItem>
                <ListItem fontSize="17px">The plate is engraved with various constellations and symbols. The bronze slab was moved in a north-south direction.</ListItem>

              </UnorderedList>
            </LegacyCard>

            <LegacyCard title='Joab' img='https://media.sciencephoto.com/image/c0055846/800wm/C0055846-Lodestone.jpg'>
              <UnorderedList>
                <ListItem fontSize="17px">The ancient compass, or ancient Chinese compass, was originally made of magnetite (a natural magnet) along with a bronze plate. The magnetite spoon always pointed south. </ListItem>
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