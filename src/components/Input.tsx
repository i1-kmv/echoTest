type InputPropsType = {
    type: string
    placeholder: string
    className: string
    formikProps?: object
    name?: string
}


export const Input = (props: InputPropsType) => {
    return (
        <input className={`${props.className} input `} type={props.type} placeholder={props.placeholder} {...props.formikProps}/>
    )
}