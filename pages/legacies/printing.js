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
          'url(https://studycli.org/wp-content/uploads/2021/01/confucius-teaching-students-001.jpg)'/** 'url(https://i.imgur.com/vP8qckF.png)' **/
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
          Printing
        </Text>
      </Box>
      <DidYouKnow centered={true} position='fixed' right='0' text={'Cai Lun was an official at the court of the Han Dynasty (206 BCE-220 AD)! He made paper from coarse fibre, and other rough materials.'}/>
      <Box width={'100%'} display='flex' justifyContent='center'>
        <Stack 
spacing={'20px'}   padding={'100px 50px'}  width={smalldevice ? '99vw' : '60vw'}>
          <LegacyCard title='Paper' img='https://clipart.world/wp-content/uploads/2020/08/old-paper-scroll-png-transparent.png'>
          <UnorderedList>
              <ListItem fontSize="17px">Before paper was invented, people used natural materials like bones, shells, wood, papyrus scrolls, and bamboo to write on.</ListItem>
              <ListItem fontSize="17px">Paper-making dates back to 105 AD, when Cai Lun created a sheet of paper. </ListItem>  
              <ListItem fontSize="17px">Compared to previous writing materials, this paper was much lighter and cheaper. </ListItem>  
            </UnorderedList>
          </LegacyCard>
          <LegacyCard title='Printing' img='https://www.easytourchina.com/images/Photo/the-four-great-inventions/p80_d20190430110807_thumb_m.jpg'>
              <UnorderedList>
                <ListItem fontSize="17px">Printing was invented in China during the Tang Dynasty (618 AD - 906 AD)</ListItem>
                <ListItem fontSize="17px">The earliest form of printing relied on blocks cut from wood, which were used to print text.</ListItem>
                <ListItem fontSize="17px">Chinese swords were usually 70-110 cm long</ListItem>

              </UnorderedList>
            </LegacyCard>
            <LegacyCard title='How early Chinese woodblock printing was done?' >
              <iframe style={{width: '100%'}} height="399" src="https://www.youtube.com/embed/SzHXXF0YLS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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