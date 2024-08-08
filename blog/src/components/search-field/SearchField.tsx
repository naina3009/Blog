import { TextField } from "@mui/material";
import { FC } from "react";
import { InputVarient } from "../../constants/Enums";

interface ISearchField{
    name : string
    value : any
    onChange : (e:any)=>void
    placeHolder ?: string
    label : string
    varient : InputVarient
    required ?: boolean
    disabled ?: boolean
    onClick ?: (e:any)=>void
    className ?: string
}

const SearchField : FC<ISearchField>= (props)=>{
    const {name,onChange,value,placeHolder,label,varient,required,disabled,onClick,className} = props
    return(
        <TextField 
            id={`outlined-basic-${name}`}
            label={label}
            variant={varient}
            type={"search"}
            name={name} 
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
            required={required}
            disabled={disabled}
            onClick={onClick}
            className={className}
         />
    )
}
export default SearchField