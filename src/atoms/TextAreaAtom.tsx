import { Textarea } from "@chakra-ui/react"
import { useContext } from "react"
import { ColorContext } from "@/context/ColorContext"

const TextAreaAtom = (props: any) => {

    const { grey001, grey002, grey003 } = useContext(ColorContext);

    return (
        <Textarea
            onChange={props.function}

            resize={'none'}
            height={'96px'}

            fontWeight={500}
            color={grey001}

            placeholder={props.placeholder}
            _placeholder={{
                color: grey002,
                fontWeight: 500
            }}
            h={'60px'}
            paddingLeft={'26px'}

            borderRadius={'none'}
            borderColor={'transparent'}
            borderBottomColor={grey002}
            borderBottomWidth={'2px'}

            _hover={{
                borderColor: 'transparent',
                borderBottomColor: grey003
            }}
        />
    )
}

export default TextAreaAtom