import { Radio, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ColorContext } from "@/context/ColorContext";

const RadioAtom = (props: any) => {

  const color = useContext(ColorContext)

  return (
    <Radio
      size={'lg'}

      value={props.value}
      borderColor={color.gray200}
      borderWidth={'2px'}

      fontWeight={'500'}
      color={color.gray200}

      _notFirst={{
        mt: '0.0rem'
      }}

      _checked={{
        border: `6px solid ${color.primary300}`
      }}

      _hover={{
        color: color.gray300
      }}
    >
      <Text
        fontWeight={'500'}
        fontSize={'16px'}
        lineHeight={'20px'}
        letterSpacing={'0.02em'}
        color={color.gray300}
      >
        {props.title}
      </Text>
    </Radio>
  )
}

export default RadioAtom;