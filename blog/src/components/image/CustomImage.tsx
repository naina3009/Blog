import { FC } from "react";

interface ICustomImage{
    src : string,
    alt : string
    width ?: string
    height ?: string
    onClick ?: ()=>void
    style ?: any
    className ?: string
}
const CustomImage : FC<ICustomImage> = (props)=>{
    const {src,alt,height,onClick,width,style,className} = props
    return(
        <img 
            src={src} 
            alt={alt}
            width={width}
            height={height}
            onClick={onClick}
            style={style}
            className={className}
        />
    )
}
export default CustomImage;