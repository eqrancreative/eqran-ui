import { useState } from "react";

const SocialMediaIcon = (props: any) => {

    const [isHover, setIsHover] = useState(false);

    const handleOnMouseEnter = () => setIsHover(true)
    const handleOnMouseLeave = () => setIsHover(false)

    const divProps = {
        onMouseEnter: handleOnMouseEnter,
        onMouseLeave: handleOnMouseLeave,
    }

    const iconProps = {
        stroke: isHover ? props.hover : props.color || '#757C8A',
        strokeWidth: props.stroke || '1.5',
        className: 'transition-all duration-500',
    }

    switch (props.media) {
        case 'instagram':
            return (
                <div {...divProps}>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path {...iconProps} fillRule="evenodd" clipRule="evenodd"
                            d="M10.0218 4H22.0338C25.3432 4 28.0272 6.68267 28.0272 9.99467V22.0067C28.0272 25.316 25.3445 28 22.0325 28H10.0218C6.71116 28 4.02716 25.3173 4.02716 22.0053V9.99467C4.02716 6.684 6.70983 4 10.0218 4V4Z"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path {...iconProps}
                            d="M22.6258 8.95104C22.3778 8.95237 22.1765 9.15371 22.1765 9.40171C22.1765 9.64971 22.3792 9.85104 22.6272 9.85104C22.8752 9.85104 23.0765 9.64971 23.0765 9.40171C23.0778 9.15237 22.8752 8.95104 22.6258 8.95104"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path {...iconProps}
                            d="M19.4213 12.6061C21.2958 14.4806 21.2958 17.5198 19.4213 19.3943C17.5468 21.2688 14.5076 21.2688 12.6331 19.3943C10.7585 17.5198 10.7585 14.4806 12.6331 12.6061C14.5076 10.7316 17.5468 10.7316 19.4213 12.6061"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )
        case 'linkedin':
            return (
                <div {...divProps}>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path {...iconProps} fillRule="evenodd" clipRule="evenodd" d="M10.0272 4H22.0325C25.3432 4 28.0272 6.684 28.0272 9.99467V22.0067C28.0272 25.316 25.3432 28 22.0325 28H10.0218C6.71116 28 4.02716 25.316 4.02716 22.0053V10C4.02716 6.68667 6.71383 4 10.0272 4V4Z" strokeLinecap="round" strokeLinejoin="round" />
                        <path {...iconProps} d="M10.8538 14.7998V21.9998" strokeLinecap="round" strokeLinejoin="round" />
                        <path {...iconProps} d="M15.6525 21.9998V17.7998C15.6525 16.1425 16.9952 14.7998 18.6525 14.7998V14.7998C20.3098 14.7998 21.6525 16.1425 21.6525 17.7998V21.9998" strokeLinecap="round" strokeLinejoin="round" />
                        <path {...iconProps} d="M10.8512 10.4507C10.6858 10.4507 10.5512 10.5853 10.5525 10.7507C10.5525 10.916 10.6872 11.0507 10.8525 11.0507C11.0178 11.0507 11.1525 10.916 11.1525 10.7507C11.1525 10.584 11.0178 10.4507 10.8512 10.4507" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )
        case 'dribbble':
            return (
                <div {...divProps}>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect {...iconProps} x="4.02716" y="4" width="24" height="24" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect {...iconProps} x="4.02716" y="4" width="24" height="24" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                        <path {...iconProps} d="M12.6627 4C17.8257 11.0613 21.3726 19.1717 23.0522 27.7565" strokeLinecap="round" strokeLinejoin="round" />
                        <path {...iconProps} d="M28.0272 16.0005L27.8913 15.9907C19.3499 15.3853 11.0893 19.1761 5.97865 26.0465" strokeLinecap="round" strokeLinejoin="round" />
                        <path {...iconProps} d="M4.02716 13.3315C11.9497 13.3159 19.6425 10.6686 25.8969 5.80566" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )
    }

    return (
        <></>
    )
}

export default SocialMediaIcon;