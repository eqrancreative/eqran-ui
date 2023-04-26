import { ColorContext } from "@/context/ColorContext"
import { useContext } from "react";

const EmailIcon = (props: any) => {

    const color = useContext(ColorContext);

    const iconProps = {
        stroke: props.color || color.gray200,
        strokeWidth: '1.5'
    }

    const svgProps = {
        width: props.width || '24',
        height: props.height || '24'
    }

    return (
        <svg {...svgProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path {...iconProps} d="M15.75 11.375V14.25C15.75 15.4926 16.7574 16.5 18 16.5H18.75C19.9926 16.5 21 15.4926 21 14.25V10.5C21 6.35786 17.6421 3 13.5 3H10.5C6.35786 3 3 6.35786 3 10.5V13.5C3 17.6421 6.35786 21 10.5 21H16" strokeLinecap="round" strokeLinejoin="round" />
            <rect {...iconProps} x="8.25" y="8.25" width="7.5" height="7.5" rx="3.125" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default EmailIcon;