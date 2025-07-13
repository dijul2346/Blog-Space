import axios from "axios"

function Signin(){
    
    function signin(){
    const userName=document.getElementById("Username").value
    const password=document.getElementById("Password").value
    axios.post("http://localhost:3000/signin",{
        userName:userName,
        password:password
        }).then(function(res){
            const token=res.data.token
            console.log(token)
            if(token){
                localStorage.setItem("authToken", token)
                localStorage.setItem("userName", userName)

                window.location="/home"
            }
            else{
                alert("Invalid")
            }
        })
    }
    
    return(
        <div >
        <div>Username : <input type="text" placeholder="Username" id="Username" className="inp"/></div>
        <div>Password : <input type="text" placeholder="Password" id="Password" className="inp"/></div>
        <button onClick={signin} style={{width:"80px"}}>Sign in</button>
        </div>

    )
}
export default Signin