import ContactCardMolecule from '@/molecules/ContactCardMolecule';
import { ColorContext } from '@/context/ColorContext';
import { Flex, Image, Link, Text } from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { HeadingAtom, TextAtom } from '../atoms'
import { SocialMediaIcon, WhatsAppIcon, EmailIcon, ArrowIcon } from '@/utils/icons';


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
                        <HeadingAtom
                            text={'Está pronto para começarmos juntos?'}
                            type={2}
                            className={'font-medium text-gray-25'}
                            width={'443px'}
                        />
                        <TextAtom
                            text={
                                'Trabalharemos em equipe, compartilhando ideias e habilidades para criar um projeto excepcional.'
                            }
                            type={1}
                            className={'text-gray-500'}
                            width={'476px'}
                        />
                    </Flex>
                    <Flex gap={'32px'}>
                        <ContactCardMolecule
                            icon={<WhatsAppIcon color={color.gray500} />}
                            label={'Fale com a gente'}
                            description={'+55 (81) 9 8181-8181'}
                            link={''}
                        />
                        <ContactCardMolecule
                            icon={<EmailIcon color={color.gray500} />}
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
                        <Link href={''} target={'_blank'}>
                            <SocialMediaIcon media={'instagram'} color={color.gray50} hover={color.instagram} />
                        </Link>
                        <Link href={''} target={'_blank'}>
                            <SocialMediaIcon media={'linkedin'} color={color.gray50} hover={color.linkedin} />
                        </Link>
                        <Link href={''} target={'_blank'}>
                            <SocialMediaIcon media={'dribbble'} color={color.gray50} hover={color.dribble} />
                        </Link>
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
                    <ArrowIcon mode={'up'} stroke={'1.5'} color={color.gray400} width={'16px'} height={'16px'} />
                </Link>
            </Flex>
        </Flex>

    )
}

export default FooterOrganism;