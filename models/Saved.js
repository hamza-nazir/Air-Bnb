import mongoose, { Schema,model,models } from "mongoose";
import connectedDb from "@/lib/db";
connectedDb();
const savedSchema=new Schema({
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    listingID:{
         type:mongoose.Schema.Types.ObjectId,
      ref:'Listing'
    }
},{timestamps:true})

const Saved=models.Saved||model('Saved',savedSchema);
export default Saved;