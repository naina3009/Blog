import {  Button } from "@mui/material";
import { FC, useState } from "react";
import CustomImage from "../../../components/image/CustomImage";
import Heading from "../../../components/heading/Heading";
import { HeadingVarient, InputVarient } from "../../../constants/Enums";
import { Link } from "react-router-dom";
import InputField from "../../../components/input-field/InputField";
import pic from '../../../assets/img/pic3.jpg';
import "./Register.css"

const Register : FC = ()=>{

    const [user,setUser] = useState<any>({
        name : "",
        email : "@gmail.com",
        phoneNumber : "",
        password : ""
    })

    const handleChange = ()=>{

    }

    const handleSubmit = ()=>{

    }
    return(
       <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <CustomImage src={pic} alt={"image"}  width="100%" height="100%"/>
            </div>
            <div className="col-lg-6 ">
                <div className="register">
                    <Heading label={"Sign Up"} varient={HeadingVarient.H3}/>
                    <form onSubmit={handleSubmit}>
                        <div className="m-4">
                        <InputField 
                            name={"name"} 
                            value={user.name} 
                            onChange={handleChange} 
                            type={"text"} 
                            label={"Name"}
                            varient={InputVarient.Outlined}
                            placeHolder="Enter Name"
                            required={true}
                        />
                        </div>
                        <div className="m-4">
                        <InputField 
                            name={"email"} 
                            value={user.email} 
                            onChange={handleChange} 
                            type={"email"} 
                            label={"Email"}
                            varient={InputVarient.Outlined}
                            placeHolder="Enter Email"
                            required={true}
                        />
                        </div>
                        <div className="m-4">
                        <InputField 
                            name={"number"} 
                            value={user.number} 
                            onChange={handleChange} 
                            type={"number"} 
                            label={"Phone Number"}
                            varient={InputVarient.Outlined}
                            placeHolder="Enter Phone Number"
                            required={true}
                        />
                        </div>
                         <div className="m-4">
                            <InputField 
                            name={"password"} 
                            value={user.password} 
                            onChange={handleChange} 
                            type={"password"} 
                            label={"password"}
                            varient={InputVarient.Outlined}
                            placeHolder="Enter password"
                            required={true}
                        />
                        </div>
                       <div className="m-4">
                       <p>Already have an account? {" "} <Link to={"/"}>Login</Link>. </p>
                       <Button 
                            type="submit" 
                            variant="contained"
                            fullWidth
                        >
                            Register
                        </Button>
                       </div>
                     </form>
                </div>
            </div>
        </div>
       </div>
    )
}
export default Register;