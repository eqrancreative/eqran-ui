import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: '4px',
                    borderColor: '#A9AFBC',
                    _hover: {
                        borderColor: '#757C8A'
                    },
                    _checked: {
                        bg: 'transparent',
                        _hover: {
                            bg: 'transparent'
                        }
                    }
                },
            }
        },
    }
})

export default theme