import axios from "axios"
import { getBlogs } from "../hooks/LoadBlogs"
import { BlogList } from "./blogList";
import { NavBar } from "./topBar";
 function Home(){
    const{blogs,allblogs,setBlogs,fetchBlogs}=getBlogs();
    return(
        <div>
            <NavBar  blogs={blogs} allblogs={allblogs} setBlogs={setBlogs}/>
            <BlogList blogs={blogs} allblogs={allblogs} fetchBlogs={fetchBlogs}/> 
        </div>
    )

 }
 export default Home