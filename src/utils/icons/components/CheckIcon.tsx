const CheckIcon = (props: any) => {
    return (
        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.53489 1L2.70071 3.83418L1 2.13347" stroke={props.color || "#3D7AF5"} stroke-width={props.stroke || "1.5"} stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default CheckIcon;