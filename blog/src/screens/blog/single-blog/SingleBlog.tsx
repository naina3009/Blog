import { FC } from "react";
import CustomButton from "../../../components/buttons/CustomButton";
import { ButtonColorVarient, ButtonVarient } from "../../../constants/Enums";
import SinglePageBlog from "./SinglePageBlog";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from "@mui/material";

const SingleBlog : FC = ()=>{
    const navigate = useNavigate()
    const { state } = useLocation();
    const handleBack = ()=>{
        navigate(-1)
    }
    return(
        <div>
           <IconButton onClick={handleBack} style={{color: "black",fontWeight:"700"}}>
            <KeyboardBackspaceIcon fontSize="large"/>
           </IconButton>
            <SinglePageBlog label={state.heading} data={state.content} pic={state.pic} alt={state.alt} author={state.author}/>
        </div>
    )
}
export default SingleBlog;