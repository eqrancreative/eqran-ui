import { B1 } from '@/atoms/BodyTextAtom';
import { ColorContext } from '@/context/ColorContext';
import { Flex } from '@chakra-ui/react'
import { useContext } from 'react';
import { H2 } from '../atoms/HeadingAtom'

const FooterOrganism = (props: any) => {

    const color = useContext(ColorContext)

    return (
        <>
            <Flex
                h={'444px'}
                bg={color.gray900}

                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                gap={'80px'}

                padding={'32px 72px'}

            >
                <Flex
                    h={'266px'}

                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Flex
                        direction={'column'}
                    >
                        <H2
                            text={'Está pronto para começarmos juntos?'}
                            color={color.gray25}
                        />
                        <B1
                            text={
                                'Trabalharemos em equipe, compartilhando ideias e habilidades para criar um projeto excepcional.'
                            }
                            color={color.gray500}
                        />

                    </Flex>

                </Flex>
                <Flex>

                </Flex>

            </Flex>
        </>
    )
}

export default FooterOrganism;