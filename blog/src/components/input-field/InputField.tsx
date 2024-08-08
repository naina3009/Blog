import { TextField } from "@mui/material";
import { FC } from "react";
import { InputVarient } from "../../constants/Enums";

interface IInputField{
    name : string
    value : any
    onChange : (e:any)=>void
    placeHolder ?: string
    type : any
    label : string
    varient : InputVarient
    required ?: boolean
    disabled ?: boolean
}
const InputField : FC<IInputField> = (props)=>{
    const {name,onChange,value,placeHolder,type,label,varient,required,disabled} = props
    return(
        <TextField 
            id={`outlined-basic-${name}`}
            label={label}
            variant={varient}
            type={type}
            name={name} 
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
            required={required}
            disabled={disabled}
        />
    )
}
export default InputField;