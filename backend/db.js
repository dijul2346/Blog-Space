const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const user=new Schema({
    password:{ type: String, required: true, unique: false },
    name:{ type: String, required: true, unique: false },
    email:{ type: String, required: true, unique: true },
    userId:{ type: String, required: true, unique: true }
})

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    content:String,
});

const UserModel = mongoose.model('users', User);
const BlogModel = mongoose.model('blogs', Blog);

module.exports = {
    UserModel,
    TodoModel
}