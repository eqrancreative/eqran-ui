import TextAtom from '@/atoms/TextAtom';
import ContactButtonAtom from '@/atoms/ContactButtonAtom';
import { ColorContext } from '@/context/ColorContext';
import { Flex, Image, Link, Text } from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { H2 } from '../atoms/HeadingAtom'


const MediaSocialIcon = (props: any) => {

    const [isHover, setIsHover] = useState(false);

    function handleOnMouseEnter() {
        setIsHover(true)
    }

    function handleOnMouseLeave() {
        setIsHover(false)
    }

    return (
        <>
            <Link
                href={props.link}
            >
                <Image
                    src={isHover ? props.iconHover : props.icon}
                    alt={props.alt}

                    w={'32px'} h={'32px'}

                    // transition={'0.3s ease-in-out'}

                    _hover={{
                        transition: '0.3s ease-in-out'
                    }}

                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                />
            </Link>
        </>
    )
}

const FooterOrganism = (props: any) => {

    const color = useContext(ColorContext)

    function scrollToUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Flex
            h={'444px'}
            bg={color.gray900}

            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            gap={'80px'}
            isolation={'isolate'}

            padding={'32px 72px'}

        >
            <Flex
                w={'100%'}
                h={'266px'}

                flexDirection={'row'}
                alignItems={'center'}
                gap={'37px'}
            >
                <Image
                    src={'/assets/images/footer-img.svg'}
                    alt={'Imagem ilustrativa para o footer'}
                    position={'relative'}
                    top={'-2px'}
                />
                <Flex
                    h={'100%'}
                    direction={'column'}
                    alignItems={'flex-start'}
                    p={'0px'}
                    gap={'52px'}
                >
                    <Flex
                        direction={'column'}
                        alignItems={'flex-start'}
                        p={'0px'}
                        gap={'22px'}
                    >
                        <H2
                            text={'Está pronto para começarmos juntos?'}
                            color={color.gray25}
                            width={'443px'}
                        />
                        <TextAtom
                            type={1}
                            text={
                                'Trabalharemos em equipe, compartilhando ideias e habilidades para criar um projeto excepcional.'
                            }
                            color={'text-gray-500'}
                            width={'w-476'}
                        />
                    </Flex>
                    <Flex gap={'32px'}>
                        <ContactButtonAtom
                            icon={'/assets/icons/whatsapp.svg'}
                            label={'Fale com a gente'}
                            description={'+55 (81) 9 8181-8181'}
                            link={''}
                        />
                        <ContactButtonAtom
                            icon={'/assets/icons/email.svg'}
                            label={'Ou mande um e-mail'}
                            description={'eqrancreative@gmail.com'}
                            link={'mailto:eqrancreative@gmail.com'}
                        />
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}

                w={'100%'} h={'34px'}
            >
                <Flex
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    gap={'200px'}
                >
                    <Flex
                        justifyContent={'inherit'}
                        alignItems={'inherit'}
                        gap={'8px'}
                        w={'inherit'} h={'inherit'}
                    >
                        <Link
                            href={'/home'}
                        >
                            <Image
                                src={'lands-logo.svg'}
                                alt={'Logo da Eqran Creative em landscape'}

                                h={'20px'}
                            />
                        </Link>
                        <Flex
                            alignItems={'flex-start'}
                            p={'2px 8px'}
                            gap={'8px'}

                            h={'22px'}
                            borderLeft={`1px solid ${color.gray500}`}
                        >
                            <Text
                                fontWeight={500}
                                fontSize={'14px'}
                                lineHeight={'18px'}
                                letterSpacing={'0.02em'}

                                color={color.gray400}
                            >
                                © Eqran creative - Criado em Vitória de Santo Antão - 2023
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        flexDirection={'inherit'}
                        justifyContent={'inherit'}
                        alignItems={'inherit'}
                        gap={'23px'}
                    >
                        <MediaSocialIcon
                            link={''}
                            icon={'/assets/icons/instagram.svg'}
                            iconHover={'/assets/icons/hover/instagram.hover.svg'}
                        />
                        <MediaSocialIcon
                            link={''}
                            icon={'/assets/icons/linkedin.svg'}
                            iconHover={'/assets/icons/hover/linkedin.hover.svg'}
                        />
                        <MediaSocialIcon
                            link={''}
                            icon={'/assets/icons/dribble.svg'}
                            iconHover={'/assets/icons/hover/dribble.hover.svg'}
                        />
                    </Flex>
                </Flex>
                <Link
                    onClick={scrollToUp}

                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'4px'}

                    w={'124px'} h={'34px'}

                    _hover={{}}
                >
                    <Text
                        fontWeight={500}
                        fontSize={'14px'}
                        lineHeight={'18px'}
                        letterSpacing={'0.02em'}

                        color={color.gray400}
                    >
                        Voltar ao topo
                    </Text>
                    <Image
                        src={'/assets/icons/arrow-up.svg'}
                        alt={'Atalho para voltar ao topo da página.'}
                    />
                </Link>
            </Flex>
        </Flex>

    )
}

export default FooterOrganism;