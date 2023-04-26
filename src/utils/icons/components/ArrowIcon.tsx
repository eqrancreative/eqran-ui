import { ColorContext } from "@/context/ColorContext"
import { useContext } from "react"

const ArrowIcon = (props: any) => {

    const color = useContext(ColorContext)

    const iconProps = {
        stroke: props.color || color.gray200,
        strokeWidth: props.stroke || '1.5'
    }

    const svgProps = {
        width: props.width || '24',
        height: props.height || '24'
    }

    switch (props.mode) {
        case 'up':
            return (
                <svg {...svgProps} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path {...iconProps} d="M8.02709 3.33398V12.6673" strokeLinecap="round" strokeLinejoin="round" />
                    <path {...iconProps} d="M4.69308 6.66701L8.02708 3.33301L11.3611 6.66701" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'right':
            return (
                <svg {...svgProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path {...iconProps} d="M19 12H5" strokeLinecap="round" strokeLinejoin="round" />
                    <path {...iconProps} d="M14 17L19 12" strokeLinecap="round" strokeLinejoin="round" />
                    <path {...iconProps} d="M14 7L19 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'down':
            return (
                <svg {...svgProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path {...iconProps} d="M12 19V5" strokeLinecap="round" strokeLinejoin="round" />
                    <path {...iconProps} d="M17.001 13.999L12 19L6.99902 13.999" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'sm':
            return (
                <svg {...svgProps} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path {...iconProps} d="M11.1666 4.99999H1.83325" strokeLinecap="round" strokeLinejoin="round" />
                    <path {...iconProps} d="M7.83325 8.33333L11.1666 5" strokeLinecap="round" strokeLinejoin="round" />
                    <path {...iconProps} d="M7.83325 1.66666L11.1666 4.99999" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
    }

    return (
        <></>
    )
}

export default ArrowIcon;