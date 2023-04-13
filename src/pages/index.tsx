import TextAtom from '@/atoms/TextAtom'
import { H1 } from '@/atoms/HeadingAtom'
import { ColorContext } from '@/context/ColorContext'
import Header from '@/organisms/Header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'

const GradientText = (props: any) => {
  return (
    <>
      <div className={'inline-flex font-normal text-h1 bg-gradient bg-clip-text text-transparent'}>
        {props.text}
      </div>
    </>
  )
}

export default function Home() {

  const color = useContext(ColorContext)
  const [coord, setCoord] = useState(`8° 6' 50" Sul\n 35° 17' 29" Oeste`);

  const produtos = <GradientText text={'produtos'} />
  const digitais = <GradientText text={'digitais'} />

  return (
    <>
      <Head>
        <title>Eqran Creative | Design & Development</title>
      </Head>
      <Header mode={'home'} />
      <div className={'flex flex-col items-center p-0 bg-gray-900'}>
        <div className={'flex flex-row justify-end items-center w-full h-416 pt-10 pb-10 pl-307 pr-307'}>
          <div className="flex flex-col justify-center items-start p-0 gap-4 w-360 h-336">
            <h1 className='text-h1 text-gray-50 leading-12 tracking-default w-304'>
              Projetando belos {produtos} e construindo experiências {digitais}
            </h1>
            <TextAtom
              type={1}
              text={
                `Somos uma empresa pernambucana de desenvolvimento e design criando soluções 
              inovadoras para transformar o mercado digital.`
              }
              color={'text-gray-500'}
              width={'w-300'}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full pt-8 pb-8 pl-18 pr-18">
          <Link href="/lab" className="flex flex-row items-center p-2 gap-2 h-14 transition-all duration-300 text-gray-500 hover:text-primary-300 hover:underline">
            <Image src="/assets/icons/arrow-right.svg" alt="Ícone de flecha" width={24} height={24} />
            <TextAtom
              type={1}
              text={`Descubra como o nosso laboratório criativo está transformando a 
                sociedade através do design social.`}
              width={'w-435'}
            />
          </Link>
          <div className={'flex flex-row justify-end items-center p-2'} style={{ gap: '433px' }}>
            <TextAtom
              type={1}
              text={coord}
              color={'text-gray-500'}
              width={'w-131'}
            />
            <Image src={'/assets/icons/arrow-down.svg'} alt={'Ícone de flecha para baixo'} className={'self-end'} width={24} height={24} />
          </div>
        </div>
        {/* TODO: Continar aqui */}
      </div>
    </>
  )
}
