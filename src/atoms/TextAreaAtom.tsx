import { Textarea } from "@chakra-ui/react"
import { useContext } from "react"
import { ColorContext } from "@/context/ColorContext"

const TextAreaAtom = (props: any) => {

  const color = useContext(ColorContext);

  return (
    <Textarea
      onChange={props.function}

      resize={'none'}
      height={'96px'}

      fontWeight={500}
      fontSize={'16px'}
      lineHeight={'20px'}
      letterSpacing={'0.02em'}
      color={color.gray500}

      placeholder={props.placeholder}
      _placeholder={{
        color: color.gray100,
        fontWeight: 500
      }}
      h={'96px'}
      padding={'20px 26px 0px 26px'}

      borderRadius={'none'}
      borderColor={'transparent'}
      borderBottomColor={color.gray100}
      borderBottomWidth={'2px'}

      _hover={{
        borderColor: 'transparent',
        borderBottomColor: color.gray200
      }}

      _focusVisible={{
        borderColor: 'none',
        borderBottomColor: color.primary300
      }}
    />
  )
}

export default TextAreaAtom