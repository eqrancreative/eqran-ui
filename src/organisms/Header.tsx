import { ColorContext } from '@/context/ColorContext';
import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ThemeContext } from '@emotion/react';
import ButtonAtom from '@/atoms/ButtonAtom';

const Section = (props: any) => {

    const color = useContext(ColorContext)

    const [focus, setFocus] = useState('');
    const [blur, setBlur] = useState<string>();
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true)
        setFocus(props.index)
    };

    function handleMouseLeave() {
        setIsHovered(false)
        setFocus('')
    };

    // function handleEffect() {
    //     if (props.index == focus) {
    //         // console.log('parou no if')
    //         return 'blur-none'
    //     } else if (props.index != focus) {
    //         // console.log('parou no else if')
    //         return 'blur-sm'
    //     } else {
    //         return 'blur-none'
    //     }
    // }

    useEffect(() => {
        // setFocus(props.index)
        // console.log('Focus:', focus)
        // console.log('Blur:', blur)
    }, [focus, props.index])


    return (
        // TODO: Adicionar o efeito de blur às outras no hover de uma seção
        <>
            <a
                href={props.href}
                className={`font-medium text-base leading-5 transition-all cursor-pointer hover:blur-none`}
                style={{
                    color: props.mode === 'home' || props.mode === 'dark' ? color.gray50 : color.gray900
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {props.name}
            </a>
        </>
    )
}


const Header = (props: any) => {

    const color = useContext(ColorContext)

    return (
        <Flex
            id={'#header'}

            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            p={'32px 72px'}
            // gap={'590px'}

            h={'116px'}

            bg={props.mode === 'light' ? color.gray50
                : props.mode === 'home' ? color.gray900 : color.gray600}
        >
            <Image
                src={
                    props.mode === 'light' ? 'dark-logo.svg' : 'light-logo.svg'
                }
                alt={'Eqran Creative Home'}
            />

            <Flex
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                p={0}
                gap={'56px'}
            >
                <div className='flex flex-row justify-between items-start p-0 transition-all w-311'>
                    <Section index={'home'} href={'/home'} name={'Home'} mode={props.mode} />
                    <Section index={'company'} href={'/company'} name={'Quem Somos'} mode={props.mode} />
                    <Section index={'projects'} href={'/projects'} name={'Projetos'} mode={props.mode} />
                    <Section index={'lab'} href={'/lab'} name={'Lab'} mode={props.mode} />
                </div>

                <ButtonAtom
                    title={'INICIAR PROJETO'}
                    style={{
                        width: '228px',
                        height: '48px',

                        color: color.gray700,
                        backgroundColor: color.primary300,

                        _hover: {
                            backgroundColor: color.primary400,
                            color: color.primary700,
                        }
                    }}
                    iconView={true}
                />
            </Flex>
        </Flex >
    )
}

export default Header;