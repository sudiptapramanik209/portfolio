import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Home from "./component/home";
import Nav from "./component/navbar";
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <Nav/>
      <Home />
    </ChakraProvider>
  );
}
