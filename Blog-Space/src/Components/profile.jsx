import axios from "axios"
import { getBlogs } from "../hooks/LoadBlogs"
import { NavBar } from "./topBar";
import { ProfileList } from "./yours";
 function Profile(){
    const user=localStorage.getItem("userName")
    const{blogs,allblogs,setBlogs,fetchBlogs}=getBlogs();
    return(
        <div>
            <NavBar  blogs={blogs} allblogs={allblogs} setBlogs={setBlogs}/>
            <h1 style={{paddingTop:"80px"}}>Welcome {user}</h1>
            <h2>Your Blogs</h2>
            <ProfileList blogs={blogs} allblogs={allblogs} fetchBlogs={fetchBlogs}/> 
        </div>
    )

 }
 export default Profile