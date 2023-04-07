import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Bai_Jamjuree } from 'next/font/google'
import theme from '../styles/theme/theme'
import Header from '@/organisms/Header';
import { useContext, useEffect, useState } from 'react';
import { ColorContext } from '@/context/ColorContext';
import { useRouter } from 'next/router';
import FooterOrganism from '@/organisms/FooterOrganism';

const font = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <FooterOrganism />
      </ChakraProvider>
    </main>
  )
}
