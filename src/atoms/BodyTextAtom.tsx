import { Text } from "@chakra-ui/react"

const B1 = (props: any) => {
    return (
        <Text
            fontWeight={props.isSemibold ? 600 : 500}
            fontSize={'16px'}
            lineHeight={'20px'}
            letterSpacing={'0.02em'}
            color={props.color}
        >
            {props.text}
        </Text>
    )
}

const B2 = (props: any) => {
    return (
        <Text
            fontWeight={props.isSemibold ? 600 : 500}
            fontSize={'14px'}
            lineHeight={'18px'}
            letterSpacing={'0.02em'}
            color={props.color}
        >
            {props.text}
        </Text>
    )
}

const Smallcaps = (props: any) => {
    return (
        <Text
            fontWeight={700}
            fontSize={'14px'}
            lineHeight={'18px'}
            letterSpacing={'0.06em'}
            textTransform={'uppercase'}
            color={props.color}
        >
            {props.text}
        </Text>
    )
}

export {
    B1, B2, Smallcaps
}