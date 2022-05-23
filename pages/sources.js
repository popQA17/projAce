import {useRouter} from 'next/router'
import { Box, UnorderedList, ListItem, Text, Stack, HStack, Image, useMediaQuery} from '@chakra-ui/react'
import LegacyCard from '../components/LegacyCard'
import DidYouKnow from '../components/DidYouKnow'
import Link from '../components/Link'
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
          Sources
        </Text>
      </Box>
        <Box width={'100%'} display='flex' justifyContent='center'>
        <Stack spacing={'20px'} padding={'100px 50px'}  width={'99vw'}>
        <LegacyCard title='Global'>
            <UnorderedList>
                <ListItem fontSize="17px"><Link>https://cdn.mos.cms.futurecdn.net/5pCA2Sgpfj9Vu8XcALuMtb.jpg</Link> (Cover image)</ListItem>
              </UnorderedList>
        </LegacyCard>
        <LegacyCard title='Homepage'>
            <UnorderedList>
                <ListItem fontSize="17px"><Link>https://www.historyhit.com/the-dynasties-that-ruled-china-in-order/</Link> (Dynasty List)</ListItem>
                <ListItem fontSize="17px"><Link>https://packages.webjet.com.au/packages/china/</Link> (Dynasty Banner Image)</ListItem>

              </UnorderedList>
        </LegacyCard>

        <LegacyCard title='Legacies'>
            <UnorderedList>
                <ListItem fontSize="17px"><Link>https://science4fun.info/wp-content/uploads/2020/09/compass.jpg</Link></ListItem>
                <ListItem fontSize="17px"><Link>http://en.chinaculture.org/gb/en_aboutchina/2003-09/24/content_26509.htm</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://www.combinedresources.us/wp-content/uploads/2016/09/Reducing-paper-usage-in-the-office.jpg</Link></ListItem>
                <ListItem fontSize="17px"><Link>http://www.stdaily.com/English/Service/2021-12/16/content_1239506.shtml#:~:text=The%20invention%20of%20paper%20is,old%20rags%2C%20and%20hemp%20waste</Link></ListItem>


              </UnorderedList>
        </LegacyCard>
        <LegacyCard title='Printing'>
            <UnorderedList overflowWrap={'break-word'}>
                <ListItem fontSize="17px"><Link>https://www.collinsdictionary.com/dictionary/english/paper</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://news.cgtn.com/news/2021-07-20/Live-Experience-movable-type-printing-in-northeast-China-s-Dalian-123yJnwN1xC/img/df3881799be24029a8b60ccc5801c4fe/df3881799be24029a8b60ccc5801c4fe.png</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://www.easytourchina.com/photo-p16385-ancient-chinese-printing</Link></ListItem>
                <ListItem fontSize="17px"><Link>http://www.silk-road.com/artl/printing.shtml#:~:text=Printing%20was%20invented%20in%20China,on%20blocks%20cut%20from%20wood.</Link></ListItem>

              </UnorderedList>
        </LegacyCard>
        <LegacyCard title='Navigation'>
            <UnorderedList>
                <ListItem fontSize="17px"><Link>https://www.dalvey.com/blog/the-history-of-the-compass</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://www.google.com/url?q=https%3A%2F%2Fwww.nationsonline.org%2Foneworld%2FChinese_Customs%2Ffeng_shui.htm&sa=D</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://www.sciencephoto.com/media/119552/view/lodestone</Link></ListItem>

              </UnorderedList>
        </LegacyCard>

        <LegacyCard title='Warefare'>
            <UnorderedList overflowWrap={'break-word'}>
                <ListItem fontSize="17px"><Link>https://cdn.britannica.com/42/124342-050-EBFA4B3C/Pyrodex-powder.jpg</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://en.wikipedia.org/wiki/History_of_gunpowder</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://en.wikipedia.org/wiki/Chinese_sword</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://www.worldhistory.org/img/r/p/500x600/7491.jpg?v=1618709410</Link></ListItem>
                <ListItem fontSize="17px"><Link>https://www.travelchinaguide.com/china_great_wall/military-defense/</Link></ListItem>

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