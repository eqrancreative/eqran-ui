import { Button, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

const ArrowIcon = (props: any) => {
    return (
        <Image
            src={'assets/icons/arrow.svg'}
            alt={'Checked icon'}

            display={props.display === true && props.iconView === true ? 'visible' : 'none'}
            transition={'display 0.8s ease-in-out'}
        />
    )
}

const ButtonAtom = (props: any) => {

    const [iconView, setIconView] = useState(false);

    return (
        <>
            <Button
                width={props.style.width}
                height={props.style.height}

                borderRadius={'50px'}
                padding={'16px'}
                gap={'4px'}

                color={props.style.color}
                backgroundColor={props.style.backgroundColor}

                onClick={props.action}

                onMouseEnter={() => setIconView(true)}
                onMouseLeave={() => setIconView(false)}

                _hover={props.style._hover}
            >
                <Text
                    fontSize={'14px'}
                    fontWeight={'700'}
                    lineHeight={'18px'}
                    letterSpacing={'0.06em'}
                >
                    {props.title}
                </Text>

                <ArrowIcon display={iconView} iconView={props.iconView} />
            </Button >
        </>
    )
}

export default ButtonAtom;