type InputPropsType = {
    type: string
    placeholder: string
    className: string

}


export const Input = (props: InputPropsType) => {
    return (
        <input className={`${props.className} input `} type={props.type} placeholder={props.placeholder}/>
    )
}