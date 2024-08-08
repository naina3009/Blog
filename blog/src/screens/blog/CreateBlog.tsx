import { FC, useState } from "react";
import InputField from "../../components/input-field/InputField";
import CustomButton from "../../components/buttons/CustomButton";
import { ButtonVarient, InputVarient } from "../../constants/Enums";
import SearchField from "../../components/search-field/SearchField";



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
                label={""} 
                varient={InputVarient.Outlined}
            />
             <InputField 
                name={"description"}
                value={inputs.description}
                onChange={handleChange}
                type={"text"} 
                label={""} 
                varient={InputVarient.Outlined}
            />
             <InputField 
                name={"image"}
                value={inputs.image ? inputs.image.name : ""}
                onChange={handleChange}
                type={'file'} 
                label={""} 
                varient={InputVarient.Outlined}
            />
            <SearchField 
            name={"naina"} 
            value={inputs.description} 
            onChange={handleChange} 
            label={"Naina"} 
            varient={InputVarient.Outlined}
            onClick={()=>alert("data")}
            />
            
            <CustomButton 
                label={"Create"} 
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                } } 
                variant={ButtonVarient.Extended}                // onClick={()=>console.log()} 
                    // type={"submit"}
            />

        </form>
  
    )
}
export default CreateBlog;