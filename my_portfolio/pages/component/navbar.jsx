import {React} from "react";
import { Flex,Heading,Box } from "@chakra-ui/react";
import Link from "next/link";


const Nave=()=>{
    return(
        <Flex style={{background: 'gray',gap:"30px"}}>
            <Heading style={{}}>Sudipta Pramanik</Heading>
            <Heading style={{
                fontSize:"2rem",
                color:"Orange",
                cursor:"pointer",
            }}><Link href="/">Projects</Link></Heading>
            <Heading style={{
                fontSize:"2rem",
                color:"Orange",
                cursor:"pointer",
            }}><Link href="/">experience</Link></Heading>
        </Flex>
    );
}
export default Nave;