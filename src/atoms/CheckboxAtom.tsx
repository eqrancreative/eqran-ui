import { Checkbox, Image } from "@chakra-ui/react";
import { ChangeEvent, useContext, useState } from 'react';
import { ColorContext } from '@/context/ColorContext';

const CheckIcon = (props: any) => {
    return (
        <Image
            src={'assets/icons/check.svg'}
            display={props.disable === true ? 'none' : 'visible'}
            alt={'Checked icon'}
        />
    )
}

const CheckboxAtom = (props: any) => {

    const [checked, setChecked] = useState(false);
    const color = useContext(ColorContext)

    function handleCheck() {
        setChecked(previousState => !previousState)
    }

    return (
        <Checkbox
            fontWeight={'500'}
            color={color.gray300}

            onChange={handleCheck}
            isChecked={checked}
            icon={checked ? <CheckIcon /> : <CheckIcon disable={true} />}

            value={props.value}

            _first={{
                mt: 0
            }}
            _hover={{
                color: color.gray400
            }}
        >
            {props.title}
        </Checkbox>
    )
}

export default CheckboxAtom;