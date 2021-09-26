import React from "react"


export const Button = (props: ButtonPropsType) => {
    return (
        <button className={`${props.className} button`} type={"submit"}>{props.title}</button>
    )
}


type ButtonPropsType = {
    title: string
    className: string
    onClick? : () => void
}
