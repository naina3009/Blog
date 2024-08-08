import { FC, useState } from "react";
import Heading from "../../components/heading/Heading";
import { ButtonVarient, HeadingVarient, InputVarient } from "../../constants/Enums";
import SearchField from "../../components/search-field/SearchField";
import CustomCard from "../../components/card/CustomCard";
import { Images } from "../../constants/Images";
import "./Home.css"
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/buttons/CustomButton";

const Home : FC = ()=>{
    const [blog,setBlog] = useState<any>('')
    const navigate = useNavigate();

    const data =[
        {
            pic : Images.pic1,
            alt: "naina",
            id : 1, 
            minRead:"10 Min Read" , 
            heading: "learn with passio and explore", 
            author: "naina gupta", 
            likesLabel:"23.9K" , 
            commentsLabel:"23K" ,
            content : " lkcib dbud uu uegfuevf d7eg uwudgeb gdgwywdus dhygfyudc x ufg7yegf jhdgfyv jyurgfryufbvsdxbv" 
        },
        {
            pic : Images.pic2,
            alt: "naina",
            id : 2, 
            minRead:"10 Min Read" , 
            heading: "learn with passio and explore", 
            author: "naina gupta", 
            likesLabel:"23.9K" , 
            commentsLabel:"23K" , 
            content : " lkcib dbud uu uegfuevf d7eg uwudgeb gdgwywdus dhygfyudc x ufg7yegf jhdgfyv jyurgfryufbvsdxbv" 
        },
        {
            pic : Images.pic3,
            alt: "naina",
            id : 3, 
            minRead:"10 Min Read" , 
            heading: "learn with passio and explore", 
            author: "naina gupta", 
            likesLabel:"23.9K" , 
            commentsLabel:"23K" , 
            content : " lkcib dbud uu uegfuevf d7eg uwudgeb gdgwywdus dhygfyudc x ufg7yegf jhdgfyv jyurgfryufbvsdxbv" 
        },
        {
            pic : Images.pic4,
            alt: "naina",
            id : 4, 
            minRead:"10 Min Read" , 
            heading: "learn with passio and explore", 
            author: "naina gupta", 
            likesLabel:"23.9K" , 
            commentsLabel:"23K" , 
            content : " lkcib dbud uu uegfuevf d7eg uwudgeb gdgwywdus dhygfyudc x ufg7yegf jhdgfyv jyurgfryufbvsdxbv" 
        },
        {
            pic : Images.pic5,
            alt: "naina",
            id : 5, 
            minRead:"10 Min Read" , 
            heading: "learn with passio and explore", 
            author: "naina gupta", 
            likesLabel:"23.9K" , 
            commentsLabel:"23K" , 
            content : " lkcib dbud uu uegfuevf d7eg uwudgeb gdgwywdus dhygfyudc x ufg7yegf jhdgfyv jyurgfryufbvsdxbv" 
        }
    ]
    const handleSinglePage= (id : number,item:any)=>{
        navigate(`/single-page/${id}`,{
          state:{
            ...item
          }
        })
    }
    return(
        <>
        <div className="home-main">
        <Heading 
            label={"Blogs"} 
            varient={HeadingVarient.H4}
            className="home-heading"
        />
        <div className="right-section">
        <SearchField 
            name={"blog"} 
            value={blog} 
            onChange={(e:any)=>setBlog(e.target.value)} 
            label={"Blogs"} 
            varient={InputVarient.Outlined}
            placeHolder="Search Blogs"
            className="home-search"
        />
        <CustomButton 
            label={"Create Blogs"} 
            variant={ButtonVarient.Extended} 
            className="ms-4 me-2"
            size={"large"}
            onClick={()=>navigate("/create-blog")}
        />
        </div>
        </div>
        
        <div>
            {
                data.map((item:any)=>(
                    <div key={item.id} className="cards">
                        <CustomCard 
                            pic={item.pic} 
                            alt={item.alt} 
                            minRead={item.minRead} 
                            heading={item.heading} 
                            author={item.author} 
                            likesLabel={item.likesLabel} 
                            commentsLabel={item.commentsLabel}
                            onClick={()=>handleSinglePage(item.id,item)}
                        />
                    </div>
                ))
            }
               
          
        </div>
        </>
    )
}
export default Home;