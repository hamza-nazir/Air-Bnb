import mongoose from "mongoose";
const { Schema, model, models } = mongoose;
const featuredSchema = new Schema({

    ListingID:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Listing'
    }
 
  }
);

const Featured = models.Featured || model("Featured", featuredSchema);
export default Featured;
