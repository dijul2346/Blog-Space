const jwt=require("jsonwebtoken")
const express=require("express")
const app=express()
app.use(express.json())
const cors = require('cors');
app.use(cors());
const { randomInt } = require("crypto")


let userid=1000
let users=[]
let blogs=[]
let blogId=0
let todoId=0;

const fs = require('fs');

function auth(req,res,next){
    const token=req.token
    fs.readFile("users.json", "utf-8", function(err, data) {
        const {userId,userName}=jwt.verify(token,"123random")
        const gotData = JSON.parse(data);
        users=gotData.users; 
        const user = users.find(u => u.userId === parseInt(userId));
        if(user){
            req.user=user.userId
            next()
        }
        else{
            return false
        }
    })    
}


app.post("/signup", function(req, res) {
    const name = req.body.name;
    const userName = req.body.userName;
    const password = req.body.password;

    if (users.some(u => u.userName === userName)) {
        return res.send("Username exists");
    }
    fs.readFile("users.json", "utf-8", function(err, data) {
        const gotData = JSON.parse(data);
        users= gotData.users || [];
        const userId = userid++;
        const newUser = { userId, name, userName, password };
        gotData.users.push(newUser);
        users.push(newUser);

        fs.writeFile("users.json", JSON.stringify(gotData), "utf-8", function(err) {
            res.send("Success");
        });
    });
});


app.post("/signin", function(req, res) {
    const userName = req.body.userName;
    const password = parseInt(req.body.password);
    fs.readFile("users.json", "utf-8", function(err, data) {
        const gotData = JSON.parse(data);
        users=gotData.users; 
        console.log(users[0])
        const user = users.find(u => u.userName === userName && u.password === password);
        
        if (user) {
            const token = jwt.sign({ userId: user.userId, userName: user.userName }, "123random");
            res.send({ token: token });
        } else {
            res.send("invalid");
            console.log("invalid");
        }
    });
});

app.post("/create-blogs",function(req,res){
    const token=req.headers.token;
    console.log(token)
    const title=req.body.title;
    const content=req.body.content;
    const { userId, userName } = jwt.verify(token, "123random");
    fs.readFile("users.json", "utf-8", function(err, data) {
        if(err){
            console.log("error")
        }
        const gotData = JSON.parse(data); 
        const user = gotData.users.find(u => u.userId === userId);
        if (user) {
        fs.readFile("blogs.json","utf-8",function(err,data){
        const gotData=JSON.parse(data);
        const blogs = gotData.blogs;
        let maxBlogId = 0;
        if (blogs.length > 0) {
            maxBlogId = Math.max(...blogs.map(b => b.blogId || 0));
        }
        var blogId = maxBlogId + 1;
        newBlog={userId,blogId,userName,title,content}
        gotData.blogs.push(newBlog);

        fs.writeFile("blogs.json", JSON.stringify(gotData), "utf-8",function(err,data){
            iden={userId,blogId}
            res.send(iden)
        })
        })
        } else {
            res.send("invalid");
        }
    });
    
})

app.get("/blogs",auth,function(req,res){
        let userId=req.user
        if(user){
        fs.readFile("blogs.json","utf-8",function(err,data){
        const gotData=JSON.parse(data);
        res.send(gotData)
   
    })}
})

app.get("/blogs/:id",function(req,res){
        const userId=parseInt(req.params.id)
        fs.readFile("blogs.json","utf-8",function(err,data){
        const gotData=JSON.parse(data);
        const selected=gotData.blogs.filter(u=>u.userId===userid)
        res.send(selected)
   
    })
})

app.get("/blogs/:uid/:bid",function(req,res){
        const blogId=parseInt(req.params.bid)
        fs.readFile("blogs.json","utf-8",function(err,data){
        const gotData=JSON.parse(data);
        const selected=gotData.blogs.filter(u=>u.blogId===blogId)
        res.send(selected)
   
    })
})

app.listen(3000)