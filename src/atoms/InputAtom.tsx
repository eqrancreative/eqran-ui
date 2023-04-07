import { Input } from "@chakra-ui/react";
import { useContext } from 'react';
import { ColorContext } from '@/context/ColorContext';

const InputAtom = (props: any) => {

  const color = useContext(ColorContext)

  return (
    <Input
      onChange={props.function}

      placeholder={props.placeholder}
      _placeholder={{
        color: color.gray100
      }}

      type={'text'}
      fontWeight={500}
      fontSize={'16px'}
      lineHeight={'20px'}
      letterSpacing={'0.02em'}
      color={color.gray500}

      h={'60px'}
      padding={'20px 26px 20px 26px'}

      borderRadius={'none'}
      borderColor={'transparent'}
      borderBottom={`2px solid ${color.gray100}`}

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

export default InputAtom;