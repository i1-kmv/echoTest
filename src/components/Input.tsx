import eye from '../images/1.png'


type InputPropsType = {
    type: string
    placeholder: string
    className: string
    formikProps?: object
    name?: string
}


export const Input = (props: InputPropsType) => {
    return (
            <input
                className={`${props.className} + ${props.type === 'file' ? 'input-file' : 'input'} `}
                type={props.type}
                placeholder={props.placeholder}
                {...props.formikProps}
            />
    )
}