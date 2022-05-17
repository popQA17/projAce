import {useRouter} from 'next/router'
import { Box, UnorderedList, ListItem, Text, Stack, HStack, Image} from '@chakra-ui/react'
import LegacyCard from '../../components/LegacyCard'
export default function Navigation(){
  const router = useRouter()
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
        >
        <Text padding={'50px 0'} fontWeight={700} 
              textDecoration={'underline'}
              textDecorationColor={'blue.400'}
              textDecorationThickness={'6px'} borderRadius={'10px'} width={'40%'} background={'rgba(255, 255, 255, 0.22)'} backdropFilter={'blur(4px)'} fontSize={'40px'} color={'#fff'}>
          Printing
        </Text>
      </Box>
        <Stack 
          spacing={'20px'} 
          padding={'0px 0px'}>
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
            <LegacyCard title='The Great Wall of China' img='https://www.precisionvaccinations.com/sites/default/files/styles/article_2x/public/the-great-wall-2190047_0.jpg'>
              <UnorderedList>
                <ListItem fontSize="17px">The Great Wall of China is now a scenic route, however it was not always peaceful. In fact it was the opposite.</ListItem>
                <ListItem fontSize="17px">The Great Wall of China was used in some Dynasties for example the Han Dynasty to protect its people.</ListItem>
                <ListItem fontSize="17px">The plate is engraved with various constellations and symbols. The bronze slab was moved in a north-south direction.</ListItem>

              </UnorderedList>
            </LegacyCard>
        </Stack>
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