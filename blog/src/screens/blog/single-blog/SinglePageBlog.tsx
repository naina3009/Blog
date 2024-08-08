import { Card, CardContent, CardActions, Box } from "@mui/material";
import { FC } from "react";
import CustomImage from "../../../components/image/CustomImage";
import Heading from "../../../components/heading/Heading";
import { ButtonVarient, HeadingVarient } from "../../../constants/Enums";
import CustomButton from "../../../components/buttons/CustomButton";

interface  ISinglePageBlog {
    label : string
    data : any
    onClick ?:(e:any)=>void
    pic : string
    alt : string
    author : string
}
const SinglePageBlog : FC<ISinglePageBlog> = (props)=>{
    const {alt,data,label,pic,author} = props
    return(
        <Card sx={{ width :"100%",padding:'50px'}}>
            <CustomImage 
                src={pic} 
                alt={alt}  
                width="100%"
                height="400px"
                style={{ borderRadius:"40px",margin:'10px'}}
            />
            <CardContent>
                <Heading label={author} varient={HeadingVarient.Body1}/>
                <Heading label={label} varient={HeadingVarient.H3}/>
                <Box>{data}</Box>
            </CardContent>
        </Card>
    )
}
export default SinglePageBlog;