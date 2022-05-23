import { Button } from "@chakra-ui/react"

const Link = (props) =>{
    return(
        <Button variant='link'overflowWrap={'break-word'} colorScheme={'blue'} onClick={()=> window.open(props.children)}><p className="kniwefwefsfwfwedwfff">{props.children}</p></Button>
    )
}

export default Link