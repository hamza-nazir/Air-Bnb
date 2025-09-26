import mongoose from 'mongoose'
let connected=false;
const connectedDb=async()=>{

mongoose.set('strictQuery',true);
 
if(connected)  return;
try{
    
    await mongoose.connect('mongodb://127.0.0.1:27017/AirBnb');
    connected=true;
    console.log("MongoDB connected")
}catch(err){
    console.log(err)
}}
export default connectedDb





