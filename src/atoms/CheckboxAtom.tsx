import { Checkbox } from "@chakra-ui/react";
import { useContext } from 'react';
import { ColorContext } from '@/context/ColorContext';

const CheckboxAtom = (props: any) => {

    const { grey003 } = useContext(ColorContext)

    return (
        <Checkbox
            fontWeight={'500'}
            color={grey003}

            _first={{
                mt: 0
            }}

            _notFirst={{
                mt: '16px'
            }}

            value={props.value}
        >
            {props.title}
        </Checkbox>
    )
}

export default CheckboxAtom;