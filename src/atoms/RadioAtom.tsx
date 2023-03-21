import { Radio, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ColorContext } from "@/context/ColorContext";

const RadioAtom = (props: any) => {

    const { grey003 } = useContext(ColorContext)

    return (
        <Radio
            value={props.value}
            borderColor={grey003}
            borderWidth={'2px'}

            fontWeight={'500'}
            color={grey003}
        >
            <Text
                fontWeight={'500'}
                color={grey003}
                lineHeight={'20px'}
            >
                {props.title}
            </Text>
        </Radio>
    )
}

export default RadioAtom;