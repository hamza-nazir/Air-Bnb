import { Schema,model,models } from "mongoose";
// import connectedDb from "@/lib/db";
// connectedDb();
const UserSchema=new Schema({
    email:{
        type:String,
        unique:[true,'Email already exits'],
        required:[true,'Email is required']
    },
    username:{
        type:String,
        required:[true,'Username is required']
    },
    image:{
        type:String
    }
},{timestamps:true})

const User=models.User||model('User',UserSchema);
export default User;