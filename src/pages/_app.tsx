import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Bai_Jamjuree } from 'next/font/google'
import theme from '../styles/theme/theme'

const font = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  )
}
