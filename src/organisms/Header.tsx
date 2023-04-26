import { ColorContext } from '@/context/ColorContext';
import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ThemeContext } from '@emotion/react';
import ButtonAtom from '@/atoms/ButtonAtom';
import { ArrowIcon } from '@/utils/icons';

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

    function handleEffect() {
        if (props.index == focus) {
            // console.log('parou no if')
            return 'blur-sm'
        } else if (props.index != focus) {
            // console.log('parou no else if')
            return 'blur-sm'
        }
    }

    useEffect(() => {

    }, [focus, props.index])


    return (
        // TODO: Adicionar o efeito de blur às outras no hover de uma seção
        <>
            <a
                href={props.href}
                className={`font-medium text-base leading-5 transition-all cursor-pointer hover:${handleEffect}`}
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
                    className={'w-[228px] text-primary-700 bg-primary-300 hover:bg-primary-400'}
                    rightIcon={
                        <ArrowIcon
                            mode={'sm'}
                            color={color.primary700}
                            stroke={'2'}
                            width={'13px'} height={'10px'}
                        />
                    }
                />
            </Flex>
        </Flex >
    )
}

export default Header;