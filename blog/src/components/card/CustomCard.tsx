import { Card, Box, CardContent, IconButton } from "@mui/material";
import { FC } from "react";
import Heading from "../heading/Heading";
import { HeadingVarient } from "../../constants/Enums";
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CustomImage from "../image/CustomImage";


interface ICustomCard{
    pic : string
    alt : string
    minRead : string,
    heading : string
    author : string
    likesLabel : string
    commentsLabel : string
    onClick?: ()=>void
}

const CustomCard :FC<ICustomCard> = (props)=>{
    const {alt,author,commentsLabel,heading,likesLabel,minRead,pic,onClick} = props
    return(
        <Card sx={{ display: 'flex',width:"100%" ,backgroundColor:"whitesmoke",marginTop:"10px",border:"2px solid grgey"}}>
            <CustomImage 
                src={pic} 
                alt={alt}  
                width="400px"
                height="300px"
                style={{ borderRadius:"40px",margin:'10px'}}
                onClick={onClick}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' ,marginTop:'20px'}}>
                <CardContent sx={{ flex: '' }}>
                    <Heading 
                        label={minRead} 
                        varient={HeadingVarient.Body1} 
                        color="text.secondary"
                    />
                    <Heading 
                        label={heading}
                        varient={HeadingVarient.H4} 
                        color="text"
                    />
                    <Heading
                        label={author} 
                        varient={HeadingVarient.H6}
                        color="primary"
                    />
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton >
                        <span className="me-1 mt-1">{likesLabel}</span>
                        <VolunteerActivismOutlinedIcon color="action" sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton >
                        <span className="me-1">{commentsLabel}</span>
                        <CommentOutlinedIcon color="action" sx={{ height: 38, width: 38 }} />
                    </IconButton>
                </Box>
            </Box>
       
      </Card>
    )
}
export default CustomCard