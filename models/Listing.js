import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const ListingSchema = new Schema(
  {
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    rates: {
     type: Number,
     required:true
    },
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    location: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    square_feet: { type: Number, required: true },
    amenities: { type: [String], default: [] },
    images: { type: [String], default: [] },
    coords: { type: [Number], required: true },
  },
  { timestamps: true }
);

const Listing = models.Listing || model("Listing", ListingSchema);
export default Listing;
