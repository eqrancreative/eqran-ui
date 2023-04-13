import { ColorContext } from "@/context/ColorContext";
import { Link, Image, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";

const Label = (props: any) => {
    return (
        <Text
            fontWeight={500}
            fontSize={'14px'}
            lineHeight={'18px'}
            letterSpacing={'0.02em'}
            color={props.color}
        >
            {props.label}
        </Text>
    )
}

const Description = (props: any) => {
    return (
        <Text
            fontWeight={600}
            fontSize={'16px'}
            lineHeight={'20px'}
            letterSpacing={'0.02em'}
            color={props.color}
        >
            {props.description}
        </Text>
    )
}

const ContactButtonAtom = (props: any) => {

    const color = useContext(ColorContext)

    return (
        <>
            <Link
                href={props.link}
                target={'_blank'}

                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                p={'16px 32px 16px 16px'}
                gap={'16px'}

                bg={color.gray50}
                borderRadius={'8px'}

                w={'309px'}
                h={'72px'}

                _hover={{
                    bg: color.gray200
                }}
            >
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    pr={'15px'}
                    gap={'8px'}

                    w={'40px'} h={'40px'}

                    borderRight={`1px solid ${color.gray100}`}
                >
                    <Image
                        src={props.icon}
                        alt={'Ícone de contato'}
                    />
                </Flex>
                <Flex direction={'column'} justifyContent={'flex-end'}>
                    <Label
                        label={props.label}
                        color={color.gray300}
                    />
                    <Description
                        description={props.description}
                        color={color.gray500}
                    />
                </Flex>
            </Link>
        </>
    )
}

export default ContactButtonAtom;