import { HStack, Button, Menu, MenuItem, MenuButton, MenuList, Spacer } from '@chakra-ui/react'
import {useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
const Navbar = (props) =>{
  const router = useRouter()
  const [show, setShow] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  }, [])
  return(
    <HStack spacing={'10px'} width={'100%'} p={'10px 10px'} className={`nav ${show && 'nav-show'}`}>
      <Button colorScheme={''} variant={'ghost'} onClick={()=> router.push("/")}>
        Ancient China
      </Button>
      <Spacer/>

      <Button colorScheme={''} variant={'ghost'} onClick={()=> router.push("/")}>
        Home
      </Button>
      <Menu autoSelect={false} background={show ? 'transparent' : 'rgb(255, 255, 255, 0.8)'} backdropFilter={'blur(8px)'}>
        <MenuButton colorScheme={''} as={Button} variant={'ghost'} rightIcon={<ChevronDownIcon />}>
          Legacies
        </MenuButton>
        <MenuList boxShadow={'none'} outline={'none'} transition={'linear background 0.1s'} border={'none'}  background={!show ? 'rgb(255,255,255,0.1)' : 'rgb(255, 255, 255, 0.8)'} backdropFilter={'blur(8px)'}>
          <MenuItem className={!show && 'dropdownbtn'} onClick={()=> router.push('/legacies/navigation')}>Navigation</MenuItem>
          <MenuItem className={!show && 'dropdownbtn'} onClick={()=> router.push('/legacies/warfare')}>Warfare</MenuItem>
          <MenuItem className={!show && 'dropdownbtn'} onClick={()=> router.push('/legacies/printing')}>Printing</MenuItem>
        </MenuList>
      </Menu>
      <Button colorScheme={''} variant={'ghost'} onClick={()=> router.push("/group-members")}>
        Group Members
      </Button>
      <Button colorScheme={''} variant={'ghost'} onClick={()=> router.push("/sources")}>
        Sources
      </Button>
    </HStack>
  )
}
export default Navbar