const jwt = require("jsonwebtoken");
const {z}=require("zod");
const { UserModel } = require("./mongo.cjs");


const signupSchema = z.object({
    name: z.string().min(1),
    userName: z.string().min(3).max(25),
    password: z.string().min(4).max(16)
});

const signinSchema=z.object({
    userName: z.string().min(3).max(25),
    password: z.string().min(4).max(16)
})

function authMiddleware(req, res, next) {
    const token =req.headers.token;
    if (!token) {
        return res.status(401).send("No Token");
    }
    try {
        const {userId,userName} = jwt.verify(token, "123random");
        UserModel.findOne({ userName })
        .then(function(user){
            if(user){
                req.user=user
                next();
            }else {
                res.status(401).send("User not found");
            }
            
        })
        .catch(() => res.status(500).send("Server error"));
    } catch (err) {
        return res.status
    }
}

module.exports ={
    authMiddleware,
    signupSchema,
    signinSchema
} 

