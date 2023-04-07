import { ColorContext } from '@/context/ColorContext';
import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ThemeContext } from '@emotion/react';
import ButtonAtom from '@/atoms/ButtonAtom';

const Section = (props: any) => {

    const color = useContext(ColorContext)
    const [blur, setBlur] = useState(false);

    const handleMouseEnter = () => {

    };

    const handleMouseLeave = () => {
        setBlur(false);
    };


    return (
        // TODO: Adicionar o efeito de blur às outras no hover de uma seção
        <Box
        //   filter="blur(5px)"
        //   transition="filter 0.3s ease-in-out"
        //   _hover={{ filter: "none" }}

        //  filter={`blur(${blur ? "5px" : "0px"})`}
        //  transition="filter 0.3s ease-in-out"
        //  _hover={{ filter: "none" }}
        >
            <Link
                href={props.href}

                color={props.mode === 'light' ?
                    color.gray900 : color.gray50}

                fontWeight={'500'}
                fontSize={'16px'}
                lineHeight={'20px'}

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                filter={`blur(${blur ? "5px" : "0px"})`}
                transition="filter 0.3s ease-in-out"
            // _hover={{ filter: "none" }}
            >
                {props.name}
            </Link>
        </Box>
    )
}

const Header = (props: any) => {

    const color = useContext(ColorContext)

    return (
        <Flex
            h={'116px'}

            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            p={'32px 72px'}
            gap={'590px'}

            bg={props.mode === 'light' ? color.gray50
                : props.mode === 'home' ? color.gray900 : color.gray600}
        >
            <Image
                src={
                    props.mode === 'light' ? 'dark-logo.svg' : 'light-logo.svg'
                }
                alt={'Eqran Creative Home'}

            // marginLeft={'72px'}
            />

            <Flex
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                p={0}
                gap={'80px'}
            >
                <Flex
                    w={'311px'} height={'52px'}

                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    gap={'24px'}

                    padding={'0px'}
                // marginRight={'56px'}
                >
                    <Section href={''} name={'Home'} mode={props.mode} />
                    <Section href={''} name={'Quem Somos'} mode={props.mode} />
                    <Section href={''} name={'Projetos'} mode={props.mode} />
                    <Section href={''} name={'Lab'} mode={props.mode} />
                </Flex>

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