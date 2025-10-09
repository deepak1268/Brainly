import type { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    text : string;
    startIcon: ReactElement;
    onClick : () => void
}

const VariantStyles = {
    primary: "bg-[#d6dbf2] text-[#544cc1] ",
    secondary: "bg-[#5047e5] text-white "
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className={`flex gap-1 px-4 py-2 rounded-lg ${VariantStyles[props.variant]}`}>
            {props.startIcon}
            {props.text}
        </button>
    )
}   