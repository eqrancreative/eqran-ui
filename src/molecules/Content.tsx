import { Box, FormLabel } from '@chakra-ui/react';
import { useContext } from 'react';
import { ColorContext } from '@/context/ColorContext';

const Content = (props: any) => {

    const { grey001 } = useContext(ColorContext)

    return (
        <Box
            mb={'32px'} display={'flex'} flexDirection={'column'}
            alignItems={'flex-start'} justifyContent={'center'}
        >

            <FormLabel
                fontSize={'16px'}
                fontWeight={'700'}
                color={grey001}
                mb={props.isInput === false ? '16px' : '8px'}

            >
                {props.label}
            </FormLabel>
            {props.child}

        </Box>
    )
}

export default Content