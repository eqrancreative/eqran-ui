import { ButtonAtom, HeadingAtom, TextAtom } from '@/atoms'
import { ColorContext } from '@/context/ColorContext'
import Header from '@/organisms/Header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { ArrowIcon } from '@/utils/icons'

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

  const color = useContext(ColorContext);

  const [coord, setCoord] = useState(`8° 6' 50' Sul\n 35° 17' 29' Oeste`);

  const [project, setProject] = useState<string>('Título do projeto');
  const [description, setDescription] = useState('Meu objetivo era criar uma interface que fosse agradável aos olhos e fácil de usar, enquanto ainda mantinha uma funcionalidade robusta para os usuários.')

  const produtos = <GradientText text={'produtos'} />
  const digitais = <GradientText text={'digitais'} />

  return (
    <>
      <Head>
        <title>Eqran Creative | Design & Development</title>
      </Head>
      <Header mode={'home'} />
      <main className={'flex flex-col items-center p-0 bg-gray-50'}>
        <section className={'flex flex-col w-full bg-gray-900'}>
          <div className={'flex flex-row justify-end items-center w-full h-[416px] py-10 px-[307px]'}>
            <div className='flex flex-col justify-center items-start p-0 gap-4 w-[360px] h-[336px]'>
              <h1 className='text-h1 text-gray-50 leading-12 tracking-default w-[304px]'>
                Projetando belos {produtos} e construindo experiências {digitais}
              </h1>
              <TextAtom
                text={`Somos uma empresa pernambucana de desenvolvimento e design criando soluções 
                inovadoras para transformar o mercado digital.`}
                type={1}
                className={'font-medium text-gray-500 w-[300px]'}
              />
            </div>
          </div>
          <div className={'flex flex-row justify-between items-center w-full py-8 px-18'}>
            <Link href='/lab' className='flex flex-row items-center p-2 gap-2 h-14 transition-all duration-300 text-gray-500 hover:text-primary-300 hover:underline'>
              <ArrowIcon mode={'right'} color={color.gray500} stroke={'2'} />
              <TextAtom
                text={`Descubra como o nosso laboratório criativo está transformando a 
                sociedade através do design social.`}
                type={1}
                className={'font-medium'}
                width={'435px'}
              />
            </Link>
            <div className={'flex flex-row justify-end items-center p-2'} style={{ gap: '433px' }}>
              <TextAtom
                text={coord}
                type={1}
                className={'font-medium text-gray-500'}
                width={'131px'}
              />
              <ArrowIcon mode={'down'} color={color.gray500} stroke={'2'} />
            </div>
          </div>
        </section>
        <section className={'flex flex-col justify-center items-center px-18 gap-8 w-full h-[572px] bg-gray-800'}>
          <div className='flex flex-row items-center p-0 gap-8'>
            <div className='flex flex-col p-0 gap-8 w-[805px]'>
              <HeadingAtom
                type={2}
                className={'font-medium text-gray-25 w-full'}

                text={`Gostamos de colaborar com empresas e pessoas entusiasmadas que estão empenhadas 
                  em solucionar problemas por meio da tecnologia.`}
              />
              <div className={'flex flex-row items-start p-0 gap-8'}>
                <div className={'flex flex-col items-start p-0 gap-6 w-[385px]'}>
                  <div className={'flex flex-col justify-center items-start p-0 gap-2 w-[330px]'}>
                    <TextAtom
                      text={'Com estratégia'}
                      type={1}
                      className={'font-semibold text-gray-50'}
                    />
                    <TextAtom
                      text={`Oferecemos aos nossos clientes uma 
                        abordagem interdisciplinar que nos 
                        permite criar estratégias impactantes`}
                      type={1}
                      className={'font-medium text-gray-200'}
                    />
                  </div>
                  <div className={'flex flex-col justify-center items-start p-0 gap-2 w-80'}>
                    <TextAtom
                      text={'Com solução'}
                      type={1}
                      className={'font-semibold text-gray-50'}
                    />
                    <TextAtom
                      text={
                        `Somos uma empresa versátil que 
                        compartilha um objetivo comum: 
                        construir soluções criativas do futuro.
                      `}
                      type={1}
                      className={'font-medium text-gray-200'}
                    />
                  </div>
                </div>
                <div className={'flex flex-col items-start p-0 gap-6 max-w-[388px] min-w-[360px]'}>
                  <div className={'flex flex-col justify-center items-start p-0 gap-2 w-[340px]'}>
                    <TextAtom
                      text={'Com funcionalidade'}
                      type={1}
                      className={'font-semibold text-gray-50'}
                    />
                    <TextAtom
                      text={`Criamos experiências digitais memoráveis ​​
                        que sejam esteticamente atraentes, 
                        funcionais e distintas.`}
                      type={1}
                      className={'font-medium text-gray-200'}
                    />
                  </div>
                  <div className={'flex flex-col justify-center items-start p-0 gap-2 w-[340px]'}>
                    <TextAtom
                      text={'Com confiança'}
                      type={1}
                      className={'font-semibold text-gray-50'}
                    />
                    <TextAtom
                      text={`Construímos através da confiança mútua, relacionamentos sólidos onde as 
                        partes envolvidas se sentem seguras para compartilhar suas ideias.`}
                      type={1}
                      className={'font-medium text-gray-200'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <figure>
              <Image src={'/assets/images/home/section-2/img.svg'} alt={'Set-up minimalista'} width={385} height={340} className={'rounded-lg'} />
            </figure>
          </div>
        </section>
        <section className={'flex flex-col justify-start gap-8 w-full px-18 pt-[26px] h-[752px]'}>
          <div className='flex flex-row justify-between items-center pb-2 border-b border-b-separator border-solid'>
            <HeadingAtom
              text={'Projetos Selecionados'}
              type={3}
              className={'font-semibold text-gray-200'}
              width={'150px'}
            />
            <div className={'flex flex-row items-center gap-4'} style={{ width: '230px' }}>
              <TextAtom
                text={'Sempre buscamos novos desafios'}
                type={2}
                className={'text-right font-medium text-gray-200'}
                width={'124px'}
              />
              <a
                className={`flex flex-row items-center px-4 py-1 gap-2 w-90 border-l border-l-separator border-solid 
                transition-all duration-500 hover:bg-gray-100`}
                href={'/projects'}
              >
                <TextAtom text={'Nossos projetos'} type={2} className={'font-bold  text-gray-400'} />
              </a>
            </div>
          </div>
          <div className={'flex flex-row items-end gap-8 w-max'} style={{ height: '638px' }}>
            <div className='flex items-end'>
              <div
                className={'flex flex-col justify-center items-center gap-2 absolute backdrop-blur-2xl rounded-tr-lg'}
                style={{ width: '494px', height: '228px', background: 'rgba(117, 124, 138, 0.4)' }}
              >
                <div className='flex flex-col gap-6' style={{ width: '398px' }}>
                  <div className={'flex flex-col items-start gap-2'}>
                    <HeadingAtom type={2} className={'font-medium text-gray-25 w-full'} text={project} />
                    <TextAtom type={1} className={'text-gray-50'} text={description} />
                  </div>
                  <div className={'flex flex-row items-start gap-2'}>
                    <a
                      href={''}
                      className={'flex flex-col justify-center items-center border-2 border-gray-200 rounded-full'}
                      style={{ width: '86px', height: '34px' }}
                    >
                      <TextAtom
                        text={'Website'}
                        type={2}
                        className={'font-medium text-gray-200'}
                      />
                    </a>
                    <a
                      href={''}
                      className={'flex flex-col justify-center items-center border-2 border-gray-200 rounded-full'}
                      style={{ width: '86px', height: '34px' }}
                    >
                      <TextAtom
                        text={'UI design'}
                        type={2}
                        className={'font-medium text-gray-200'}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <Image
                src={'assets/images/project-example.svg'}
                alt={'Projeto'}
                width={804}
                height={638}
              />
            </div>
          </div>
        </section>
        <section className={'flex flex-col justify-center items-center gap-8 w-full h-[424px]'}>
          <HeadingAtom text={'Você idealiza, a gente cria.'} type={2} className={'font-medium text-gray-500'} />
          <div className={'flex flex-row justify-center items-center py-4 h-[112px]'}>
            <div className={'flex flex-col justify-center items-center gap-2 w-[244.4px]'}>
              <figure>
                <Image src={'/assets/images/home/section-4/computer.svg'} alt={'Ícone de computador'} width={32} height={32} />
              </figure>
              <HeadingAtom type={3} text={'Websites'} className={'font-semibold text-gray-300'} />
            </div>
            <div className={'flex flex-col justify-center items-center gap-2 w-[244.4px]'}>
              <figure>
                <Image src={'/assets/images/home/section-4/rocket.svg'} alt={'Ícone de computador'} width={32} height={32} />
              </figure>
              <HeadingAtom type={3} text={'Landing Pages'} className={'font-semibold text-gray-300'} />
            </div>
            <div className={'flex flex-col justify-center items-center gap-2 w-[244.4px]'}>
              <figure>
                <Image src={'/assets/images/home/section-4/graphic.svg'} alt={'Ícone de computador'} width={32} height={32} />
              </figure>
              <HeadingAtom type={3} text={'Sistemas'} className={'font-semibold text-gray-300'} />
            </div>
            <div className={'flex flex-col justify-center items-center gap-2 w-[244.4px]'}>
              <figure>
                <Image src={'/assets/images/home/section-4/smartphone.svg'} alt={'Ícone de computador'} width={32} height={32} />
              </figure>
              <HeadingAtom type={3} text={'Aplicativos'} className={'font-semibold text-gray-300'} />
            </div>
            <div className={'flex flex-col justify-center items-center gap-2 w-[244.4px]'}>
              <figure>
                <Image src={'/assets/images/home/section-4/store.svg'} alt={'Ícone de computador'} width={32} height={32} />
              </figure>
              <HeadingAtom type={3} text={'eCommerces'} className={'font-semibold text-gray-300'} />
            </div>
          </div>
        </section>
        <section className={'flex flex-col justify-center items-center px-18 py-20 w-full h-[744px] bg-gray-100'}>
          <div className={'flex flex-col pb-14 gap-10 w-full'}>
            <div className='flex flex-row justify-between items-center pb-2 h-[56px] border-b border-b-separator border-solid'>
              <HeadingAtom
                text={'Nosso Workflow'}
                type={3}
                className={'font-semibold text-gray-200'}
                width={'150px'}
              />
              <div className={'flex flex-row items-center gap-4'} style={{ width: '161px' }}>
                <TextAtom
                  text={'Do design ao código'}
                  type={2}
                  className={'text-right font-medium text-gray-200'}
                  width={'68px'}
                />
                <a
                  className={`flex flex-row items-center px-4 py-1 gap-2 w-90 border-l border-l-separator border-solid 
                    transition-all duration-500 hover:bg-gray-200`}
                  href={'/projects'}
                  style={{ width: '77px' }}
                >
                  <TextAtom text={'Quem somos'} type={2} className={'font-bold  text-gray-400'} />
                </a>
              </div>
            </div>
            <div className={'flex flex-row items-center w-full'}>
              <div className={'flex flex-col items-start w-[611px] h-[360px]'}>
                <div className={'flex flex-row justify-center items-center w-full gap-20 p-4 h-[180px] border-2 border-gray-50 border-b-0 border-r-0'}>
                  <figure>
                    <Image
                      src={'/assets/images/home/section-5/lightning.svg'}
                      alt={'Ícone de raio'}
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className={'flex flex-col items-start'} style={{ gap: '13px', width: '281px' }}>
                    <HeadingAtom text={'Start'} type={3} className={'text-gray-500 font-semibold'} />
                    <TextAtom
                      text={`Pesquisamos e analisamos o 
                        público-alvo do seu produto ou 
                        serviço para criar e entregar as 
                        melhores experiências e resultados.`}
                      type={1}
                      className={'font-medium text-gray-300'}
                    />
                  </div>
                </div>
                <div className={'flex flex-row justify-center items-center w-full gap-20 p-4 border-2 border-gray-50 border-r-0'} style={{ height: '180px' }}>
                  <figure>
                    <Image
                      src={'/assets/images/home/section-5/terminal.svg'}
                      alt={'Ícone de terminal'}
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className={'flex flex-col items-start'} style={{ gap: '13px', width: '281px' }}>
                    <HeadingAtom text={'Development'} type={3} className={'text-gray-500 font-semibold'} />
                    <TextAtom
                      text={`É aqui que a sua ideia cria vida 
                      e começa a ser espalhada pelo 
                      mundo através da internet.`}
                      type={1}
                      className={'font-medium text-gray-300'}
                    />
                  </div>
                </div>
              </div>
              <div className={'flex flex-col items-start'} style={{ width: '611px', height: '360px' }}>
                <div className={'flex flex-row justify-center items-center w-full gap-20 p-4 border-2 border-gray-50 border-b-0'} style={{ height: '180px' }}>
                  <figure>
                    <Image
                      src={'/assets/images/home/section-5/board.svg'}
                      alt={'Ícone de um design board'}
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className={'flex flex-col items-start'} style={{ gap: '13px', width: '281px' }}>
                    <HeadingAtom text={'Design'} type={3} className={'text-gray-500 font-semibold'} />
                    <TextAtom
                      text={`Não basta ser bonito, tem que ser intuitivo e fazer sentido para o seu cliente. Usamos técnicas de UX 
                        Design para alavancar o seu negócio.`}
                      type={1}
                      className={'font-medium text-gray-300'}
                    />
                  </div>
                </div>
                <div className={'flex flex-row justify-center items-center w-full gap-20 p-4 border-2 border-gray-50'} style={{ height: '180px' }}>
                  <figure>
                    <Image
                      src={'/assets/images/home/section-5/window.svg'}
                      alt={'Ícone de uma janela de uma computador'}
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className={'flex flex-col items-start'} style={{ gap: '13px', width: '281px' }}>
                    <HeadingAtom text={'Delivery'} type={3} className={'text-gray-500 font-semibold'} />
                    <TextAtom
                      text={`Vamos além da entrega,
                        evoluímos para manter seu
                        projeto sempre atualizado.`}
                      type={1}
                      className={'font-medium text-gray-300'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center pt-6 w-full border-t border-t-separator border-solid'>
            <TextAtom
              text={'Uma empresa entusiasmada em criar Interfaces digitais envolventes e agradáveis.'}
              type={1}
              className={'font-normal text-gray-300'}
              width={'358px'}
            />
            <ButtonAtom
              title={'iniciar projeto'}
              action={''}
              rightIcon={
                <ArrowIcon
                  mode={'sm'}
                  color={color.gray50}
                  stroke={'2'}
                  width={'13px'} height={'10px'}
                />
              }
              className={'w-[228px] text-gray-50 bg-gray-800 hover:bg-gray-900'}
            />
          </div>
        </section>
      </main>
    </>
  )
}