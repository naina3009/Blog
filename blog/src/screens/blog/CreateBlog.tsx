import { FC, useState } from "react";
import InputField from "../../components/input-field/InputField";
import CustomButton from "../../components/buttons/CustomButton";



const CreateBlog : FC = ()=>{
    const [inputs,setInputs] = useState<any>({
        heading: "",
        description: "",
        image: null,
    })

    const handleSubmit = (e:any)=>{
e.preventDefault();
console.log(inputs)
    }

    const handleChange = (e:any)=>{
        const { name, value, type, files } = e.target;

        if (type === "file") {
            setInputs((prevInputs:any) => ({
                ...prevInputs,
                [name]: files ? files[0].name : null
            }));
        } else {
            setInputs((prevInputs:any) => ({
                ...prevInputs,
                [name]: value
            }));
        }
    }
    return(
    
        <form onSubmit={handleSubmit}>
            <InputField 
                name={"heading"}
                value={inputs.heading}
                onChange={handleChange} 
                type={"text"}
            />
             <InputField 
                name={"description"}
                value={inputs.description}
                onChange={handleChange} 
                type={"text"}
            />
             <InputField 
                name={"image"}
                value={inputs.image  ? inputs.image.name : ""}
                onChange={handleChange} 
                type={'file'}
            />
            <CustomButton 
                label={"Create"} 
                // onClick={()=>console.log()} 
                    type={"submit"}
            />

        </form>
  
    )
}
export default CreateBlog;