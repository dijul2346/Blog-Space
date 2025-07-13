import { SearchBar } from "./search";

export function NavBar(blogs,allblogs,setBlogs){
    function signout(){
        localStorage.setItem("authToken","")
        window.location="signin"
    }
    return(
        <div className="nav">
        <div onClick={()=>window.location='/home'} ><h2>Blog.com</h2></div>
        <div><SearchBar blogs={blogs} allblogs={allblogs} setBlogs={setBlogs} /></div>
        <div style={{display:"flex",gap: "20px",fontSize:"16px",padding:"10px",justifyContent:"end"}}>
            <div><button onClick={()=>window.location="createBlog"}>Create Blog</button></div>
            <div><button onClick={()=>window.location="profile"} >You</button></div>
            <div><button onClick={()=>signout()}>Log Out</button></div>
        </div>
    </div>
    )
}
