import React from "react";

type ButtonPropsType = {
    title: string
    className: string
    onClick? : () => void
}


export const Button = (props: ButtonPropsType) => {
    return (
        <button className={`${props.className} button`}>{props.title}</button>
    )
}