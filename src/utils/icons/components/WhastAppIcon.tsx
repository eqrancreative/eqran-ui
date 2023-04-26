import { ColorContext } from "@/context/ColorContext";
import { useContext } from "react";

const WhatsAppIcon = ({ color, width, height }: any) => {

    const { gray200 } = useContext(ColorContext)

    const iconProps = {
        stroke: color || gray200,
        strokeWidth: '1.5',
    }

    const svgProps = {
        width: width || '24',
        height: height || '24'
    }

    return (
        <svg {...svgProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path {...iconProps} fillRule="evenodd" clipRule="evenodd" d="M18.204 5.76205C16.558 4.11505 14.369 3.20705 12.037 3.20605C7.22999 3.20605 3.31899 7.11505 3.31799 11.9201C3.31599 13.4491 3.71699 14.9521 4.48099 16.2771L3.24399 20.7931L7.86599 19.5811C9.14499 20.2771 10.577 20.6421 12.033 20.6421H12.037C16.842 20.6421 20.753 16.7321 20.755 11.9271C20.756 9.59905 19.85 7.41005 18.204 5.76205Z" strokeLinecap="round" strokeLinejoin="round" />
            <path {...iconProps} d="M13.095 13.5599L13.501 13.1569C13.874 12.7869 14.464 12.7399 14.894 13.0419C15.31 13.3339 15.686 13.5959 16.036 13.8399C16.592 14.2259 16.659 15.0179 16.18 15.4959L15.821 15.8549" strokeLinecap="round" strokeLinejoin="round" />
            <path {...iconProps} d="M8.14502 8.17938L8.50402 7.82038C8.98202 7.34238 9.77402 7.40938 10.16 7.96438C10.403 8.31438 10.665 8.69038 10.958 9.10638C11.26 9.53638 11.214 10.1264 10.843 10.4994L10.44 10.9054" strokeLinecap="round" strokeLinejoin="round" />
            <path {...iconProps} d="M15.821 15.8553C14.34 17.3293 11.851 16.0773 9.88602 14.1113" strokeLinecap="round" strokeLinejoin="round" />
            <path {...iconProps} d="M9.88801 14.1147C7.92301 12.1487 6.67101 9.66069 8.14501 8.17969" strokeLinecap="round" strokeLinejoin="round" />
            <path {...iconProps} d="M10.44 10.9053C10.759 11.4083 11.168 11.9063 11.63 12.3683L11.632 12.3703C12.094 12.8323 12.592 13.2413 13.095 13.5603" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default WhatsAppIcon;