import { useEffect, useState } from "react";

const TextAtom = ({ id, text, type, width, className }: any) => {

    const [props, setProps] = useState<string>()

    useEffect(() => {
        switch (type) {
            case 1:
                setProps('text-base leading-5 tracking-default');
                break;
            case 2:
                setProps('text-sm leading-4 tracking-default');
                break;
            case 3:
                setProps('text-sm leading-4 uppercase tracking-smallcaps');
                break;
            default:
                setProps('text-base leading-5 tracking-default')
        }
    }, [type])

    return (
        <p id={id} className={`${props} ${className}`} style={{ width: width }}>
            {text}
        </p>
    )
}

export default TextAtom;