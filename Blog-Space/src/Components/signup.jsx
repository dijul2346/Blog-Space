import axios from "axios"
function Signup(){

    function signup(){
        axios.post("http://localhost:3000/signup",{
           name:document.getElementById("name").value,
           userName:document.getElementById("Username").value,
           password:document.getElementById("Password").value
        }).then(function(response){
            if(response.data=="Username exists"){
                alert("Username Exists")
            }
            else if(response.data=="Invalid"){
                alert("Username should have minimum 3 charcter")
            }
            else{
                window.location="/signin"
            }
            
        })
    }

    return(
        <div>
            <div>Name: <input type="text" placeholder="Name" id="name" className="inp"/></div>
            <div>Username : <input type="text" placeholder="Username" id="Username" className="inp"/></div>
            <div>Password : <input type="text" placeholder="Password" id="Password" className="inp"/></div>
            <div><button onClick={signup} style={{width:"80px"}}>Sign up</button></div>
            
        </div>

    )
}
export default Signup