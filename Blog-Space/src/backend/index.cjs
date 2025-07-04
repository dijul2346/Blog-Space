const path=require("path")
const jwt=require("jsonwebtoken")
const express=require("express")
const app=express()
app.use(express.json())
const cors = require('cors');
app.use(cors());
const mongoose=require('mongoose')

const { UserModel, BlogModel } = require("./mongo.cjs");
const {authMiddleware, signupSchema} = require("./modules.cjs")

mongoose.connect("mongodb+srv://dijulM:DM%40ncr70@cluster0.fezmq8v.mongodb.net/Blog-app-db");
console.log(mongoose.connection.readyState);


app.post("/signup", function(req, res) {
        const parseResult = signupSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).send("Invalid input");
    }
    const { name, userName, password } = parseResult.data;
    UserModel.findOne({ userName })
        .then(function(user) {
            if (user) {
                res.send("username exists");
            } else {
                UserModel.create({
                    name: name,
                    userName: userName,
                    password: password
                }).then(() => {
                    res.send("success");
                });
            }
        })
        .catch(err => res.status(500).send("error"));
});


app.post("/signin",function(req,res){
    console.log("reached signin")
    const userName=req.body.userName;
    const password=req.body.password;
    UserModel.findOne({
        userName:userName,
        password:password
    })
    .then(function(user){
        if(user){
            const userId=user._id
            const token=jwt.sign({userId,userName},"123random");
            res.send({token:token})
        }
        else{
            res.send("invalid");
        }
    })
})


app.post("/blogs",authMiddleware,function(req,res){
    const title=req.body.title;
    const content=req.body.content;
    const user= req.user;
    BlogModel.create({
        userId:user._id,
        userName:user.userName,
        title:title,
        content:content
    }).then(
        function(response){
        res.send(response._id)
    })
})

app.get("/blogs",authMiddleware,function(req,res){
            BlogModel.find({})
            .then(function(response){
                console.log("data is ", response)
                res.send(response)
    })
})

app.get("/blogs/:un",authMiddleware,function(req,res){
    const sun=req.params.un;
        BlogModel.find({
            userName:sun
        })
        .then(function(response){
            console.log("data is ", response)
            res.send(response)
        })
})

app.delete("/blogs/:bid",authMiddleware,function(req,res){
    const bid=req.params.bid;
            BlogModel.deleteOne({
                userName:userName,
                _id:bid
            }).then(function(response){
                res.send("deleted")
            })
})

app.listen(4000)