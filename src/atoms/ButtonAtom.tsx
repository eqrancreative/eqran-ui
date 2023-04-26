import { ColorContext } from "@/context/ColorContext";
import { useContext, useState } from "react";
import TextAtom from "./TextAtom";


const ButtonAtom = ({ title, action, className, rightIcon, leftIcon }: any) => {

    const color = useContext(ColorContext)
    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter() {
        setIsHover(true)
    }

    function handleMouseLeave() {
        setIsHover(false)
    }

    function translateIcon() {
        return rightIcon ? 'hover:-translate-x-[4px]' : leftIcon ? 'hover:translate-x-[4px]' : ''
    }

    return (
        <>
            {/* TODO: Corrigir transição da aparição dos ícones */}
            <button
                className={`flex flex-row justify-center items-center rounded-full h-12 ${className} transition-all duration-[800ms]`}
                onClick={action}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={`relative w-0 left-[32px] transition-all duration-[800ms] ${isHover && leftIcon ? 'opacity-100' : 'opacity-0'}`}>
                    {leftIcon}
                </div>

                <TextAtom
                    text={title}
                    type={3}
                    className={`flex justify-center items-center font-bold w-full h-full transition-all duration-[800ms] ${translateIcon()}`}
                />

                <div className={`relative w-0 -left-[46px] transition-all duration-[800ms] ${isHover && rightIcon ? 'opacity-100' : 'opacity-0'}`}>
                    {rightIcon}
                </div>
            </button >
        </>
    )
}

export default ButtonAtom;