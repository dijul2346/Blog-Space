import { NavBar } from "./topBar"
import axios from "axios";
import "../css/createBlog.css";
function CreateBlog(){

    function submit(){
        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;
    axios.post(
      "http://localhost:3000/blogs",
      { title: title,
        content:content
       },
      {
        headers: {
          token: localStorage.getItem("authToken"),
        },
      }
    ).then(function(res){
        window.location="/home"
    })
    }
    return(
        <>
        <NavBar></NavBar>
        <div>
            <div id="c1">
                <h3>Title</h3>
                <textarea placeholder="New Blog"id="title"></textarea>
            </div>
            <div id="c2">
        <textarea type="text" id="content" placeholder="Enter something"></textarea>
        
        <button onClick={()=>submit()}>Submit</button>
    </div>
            
        </div>
    </>
    )

}

export default CreateBlog