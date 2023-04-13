import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Bai_Jamjuree } from 'next/font/google'
import theme from '../styles/theme/theme'
import '@/styles/globals.css'
import FooterOrganism from '@/organisms/FooterOrganism';
import Head from 'next/head'

const font = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ChakraProvider theme={theme}>
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
          <FooterOrganism />
        </>
      </ChakraProvider>
    </main>
  )
}

export default App;
