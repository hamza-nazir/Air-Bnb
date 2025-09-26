import mongoose, { Schema,model,models } from "mongoose";
import connectedDb from "@/lib/db";
connectedDb();
const reviewsSchema=new Schema({
    comments:{
        type:String,
            required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    rating:{
      type:Number,
      required:true
    },
    listingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Listing'
    }
},{timestamps:true})

const Reviews=models.Reviews||model('Reviews',reviewsSchema);
export default Reviews;