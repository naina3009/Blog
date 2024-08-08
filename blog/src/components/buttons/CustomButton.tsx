import { FC } from "react";

interface ICustomButton{
    label : string
    onClick ?: ()=>void
    className ?: string
    type:any
}
const CustomButton : FC<ICustomButton> = (props)=>{
    const { label,onClick,type,className} = props

    return(
        
        <button type={type} className={className} onClick={onClick}>
            {label}
        </button>
        
      
    )
}
export default CustomButton