const TextAtom = (props: any) => {
    return (
        <p
            className={`
            ${props.isSemibold ? 'font-semibold' : 'font-medium'}
            ${props.type === 1 ? 'text-body-1 leading-5 tracking-default' :
                    props.type === 2 ? 'text-body-2 leading-4 tracking-default' :
                        'uppercase tracking-smallcaps'} ${props.color} ${props.width}
            `}
        >
            {props.text}
        </p>
    )
}

export default TextAtom;