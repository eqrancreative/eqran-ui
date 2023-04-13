import { Flex, FormLabel } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { ColorContext } from '@/context/ColorContext';

const Content = (props: any) => {

    const { gray500 } = useContext(ColorContext)

    return (
        <Flex
            flexDirection={'column'}
            alignItems={'flex-start'}

            w={'100%'}
        >

            <FormLabel
                fontSize={'16px'}
                fontWeight={'600'}
                lineHeight={'20px'}
                letterSpacing={'0.02em'}
                color={gray500}
                mb={props.isInput === false ? '16px' : '8px'}
            >
                {props.label}
            </FormLabel>

            {props.child}

        </Flex>
    )
}

export default Content