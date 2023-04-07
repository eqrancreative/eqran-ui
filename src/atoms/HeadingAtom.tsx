import { Text } from '@chakra-ui/react'

const H1 = (props: any) => {
    return (
        <Text
            fontWeight={400}
            fontSize={'40px'}
            lineHeight={'48px'}
            letterSpacing={'0.02em'}
            color={props.color}
        >
            {props.text}
        </Text>
    )
}

const H2 = (props: any) => {
    return (
        <Text
            fontWeight={500}
            fontSize={'32px'}
            lineHeight={'40px'}
            letterSpacing={'0.02em'}
            color={props.color}
        >
            {props.text}
        </Text>
    )
}

const H3 = (props: any) => {
    return (
        <Text
            fontWeight={props.isSemibold ? 600 : 500}
            fontSize={'32px'}
            lineHeight={'40px'}
            letterSpacing={'0.02em'}
            color={props.color}
        >
            {props.text}
        </Text>
    )
}


export {
    H1, H2, H3
}