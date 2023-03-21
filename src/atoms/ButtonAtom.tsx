import { Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ColorContext } from "@/context/ColorContext";

const ButtonAtom = (props: any) => {

    const color = useContext(ColorContext)

    return (
        <Button
            size='lg'

            w={'100%'}
            borderRadius={'50px'}

            color={'#F1F0F5'}
            backgroundColor={color.black002}

            onClick={props.action}

            _hover={{
                backgroundColor: color.blue001
            }}
        >
            <Text
                fontSize={'14px'}
                fontWeight={'700'}
                lineHeight={'18px'}
            >
                {props.title}
            </Text>
        </Button >
    )
}

export default ButtonAtom;