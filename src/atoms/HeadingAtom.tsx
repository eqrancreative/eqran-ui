import { useEffect, useState } from 'react';

const HeadingAtom = ({ type, text, width, className }: any) => {

    const [props, setProps] = useState<string>()

    useEffect(() => {
        switch (type) {
            case 1:
                setProps('text-h1 leading-12');
                break;
            case 2:
                setProps('text-h2 leading-10');
                break;
            case 3:
                setProps('text-h3 leading-6');
                break;
            default:
                setProps('font-normal text-h1 leading-12')
        }
    }, [type])

    return (
        <h1 className={`${props} ${className} tracking-default`} style={{ width: width }}>
            {text}
        </h1>
    )
}

export default HeadingAtom;