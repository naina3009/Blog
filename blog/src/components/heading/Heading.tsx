import { Typography } from "@mui/material";
import { FC } from "react";
import { HeadingVarient } from "../../constants/Enums";

interface IHeading{
  label : string,
  varient : HeadingVarient
  color ?: string
  className ?: string
}
const Heading : FC<IHeading> = (props)=>{
  const {label,varient,color,className,} = props  
  return(
        <Typography variant={varient} color={color} className={className} >
        {label}
      </Typography>
      
    )
}
export default Heading