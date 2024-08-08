import {  Button } from "@mui/material";
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../../../components/heading/Heading";
import CustomImage from "../../../components/image/CustomImage";
import InputField from "../../../components/input-field/InputField";
import { HeadingVarient, InputVarient } from "../../../constants/Enums";
import pic from '../../../assets/img/pic4.jpg'

const LoginScreen : FC = ()=>{

    const [userDetail,setUserDetail] = useState<any>({
        name : "",
        email : "@gmail.com",
        password : ""
    })

    const handleChange = ()=>{

    }

    const handleSubmit = ()=>{

    }


    const navigate = useNavigate();
    return(
       <div className="container ">
        <div className="row">
            <div className="col-6">
                <CustomImage src={pic} alt={"image"} width="100%" height="100%"/>
            </div>
            <div className="col-lg-6">
                <div className="register">
                    <Heading label={"Login"} varient={HeadingVarient.H3} className="m-3 "/>
                   
                    <form onSubmit={handleSubmit}>
                        <div className="m-4 ">
                        <InputField 
                            name={"name"} 
                            value={userDetail.name} 
                            onChange={handleChange} 
                            type={"text"} 
                            label={"Name"}
                            varient={InputVarient.Outlined}
                            placeHolder="Enter Name"
                            required={true}
                        />
                        </div>
                        <div className="m-4 ">
                         <InputField 
                            name={"email"} 
                            value={userDetail.email} 
                            onChange={handleChange} 
                            type={"email"} 
                            label={"Email"}
                            varient={InputVarient.Outlined}
                            placeHolder="Enter Email"
                            required={true}
                        />
                        </div>
                        <div className="m-4 ">
                         <InputField 
                            name={"password"} 
                            value={userDetail.password} 
                            onChange={handleChange} 
                            type={"password"} 
                            label={"Password"}
                            varient={InputVarient.Outlined}
                            placeHolder="Enter password"
                            required={true}
                        />
                        </div>
                        <p className="m-4">Don't have an account <Link to={"/register"}>Create account</Link>. </p>
                        <div className="m-3 p-3">
                       
                        <Button 
                            // type="submit" 
                            variant="contained"
                            fullWidth
                            onClick={()=>navigate("/home")}

                        >
                            Login
                        </Button>
                        </div>
                     </form>
                </div>
            </div>
        </div>
       </div>
    )
}
export default LoginScreen;