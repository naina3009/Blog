import { Fab } from "@mui/material";
import { FC } from "react";
import { ButtonColorVarient, ButtonVarient } from "../../constants/Enums";

interface ICustomButton{
    label : string
    onClick ?: (e:any)=>void
    className ?: string
    variant : ButtonVarient
    color ?: ButtonColorVarient
    size ?: any
}
const CustomButton : FC<ICustomButton> = (props)=>{
    const { label,onClick,variant,className,color,size} = props

    return(
        <Fab 
            variant={variant} 
            size={size || "medium" }
            color={color || "primary"} 
            className={className} 
            onClick={onClick}
        >
           {label}
        </Fab>
    )
}
export default CustomButton