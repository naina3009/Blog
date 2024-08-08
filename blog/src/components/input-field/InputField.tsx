import { FC } from "react";

interface IInputField{
    name : string
    value : any
    onChange : (e:any)=>void
    placeHolder ?: string
    type : any
}
const InputField : FC<IInputField> = (props)=>{
    const {name,onChange,value,placeHolder,type} = props
    return(

        <input 
        type={type}
            name={name} 
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
        />
    )
}
export default InputField;