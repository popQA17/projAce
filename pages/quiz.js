import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Quiz(){
    const router = useRouter();
    useEffect(()=>{
        window.open('https://quiz.popplays.tk')
    }, [])
    return(
        <>
        </>
    )
}