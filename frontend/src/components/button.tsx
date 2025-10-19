import type { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    text : string;
    startIcon?: ReactElement;
    onClick? : () => void;
    fullWidth?: boolean
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
}

const SizeStyles = {
    sm: "px-2 py-1",
    md: "px-4 py-2",
    lg: 'px-6 py-3 text-lg'
}

const VariantStyles = {
    primary: "bg-[#d6dbf2] text-[#544cc1]",
    secondary: "bg-[#5047e5] text-white "
}

export const Button = (props: ButtonProps) => {
    return (
        <button disabled={props.disabled} onClick={props.onClick} className={`flex justify-center items-center gap-1 ${SizeStyles[props.size || "md"]} rounded-lg cursor-pointer ${VariantStyles[props.variant]} ${props.fullWidth && "w-full"}`}>
            {props.startIcon}
            {props.text}
        </button>
    )
}   