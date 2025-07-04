const { default: mongoose } = require("mongoose")

const UserSchema=({
    name:String,
    userName:String,
    password:String,
})

const BlogSchema=({
    userid:String,
    userName:String,
    title:String,
    content:String,
})



module.exports={
    UserModel:mongoose.model('users',UserSchema),
    BlogModel:mongoose.model('blogs',BlogSchema)
}

