import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: '4px',
                    borderColor: '#8F96A3',
                },
            }
        },
    }
})

export default theme