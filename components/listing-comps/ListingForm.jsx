'use client'
import Map from "../map-comp/Map";
import { ServerAction } from "@/hooks/ServerAction";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
const ListingForm = () => {
  const router = useRouter();

  const [loading,setLoading]=useState(false)
    const [coords, setCoords] = useState([74.1914, 32.1476]); 
    const [limit,setLimit]=useState(false);
      const [online,setIsOnline]=useState(false);
    
      useEffect(()=>{
        if(navigator.onLine==true){
          setIsOnline(true)
        }else{
          setIsOnline(false)
        }
      },[])
    
const handleSubmit=async (formData)=>{
  const data = {
    ...Object.fromEntries(formData.entries()), 
    amenities: formData.getAll('amenities'),   
    images: formData.getAll('images'), 
    coords:coords,
  };
  console.log(data)
  if(data.images.length<5) {
   setLimit(true) 
    return 
  }else{
   setLimit(false) 
  }

 try{
  setLoading(true)
 const res=await ServerAction(data);
   console.log(res)
  }catch(err){
    // setNoInternet(true);
    console.log("Error")
  }finally{
   setLoading(false);
   router.push('/')
  }
}


  


  return (
    <div className="container mt-5">
     <form
  className="bg-light p-4 rounded shadow"
  onSubmit={(e) => {e.preventDefault(); const formData = new FormData(e.target); handleSubmit(formData);}}>
        <h2 className="mb-4">Add Listing</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Listing Name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <select className="form-select" id="type" name="type" required >
            <option value="">Select Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Studio">Studio</option>
            <option value="Condo">Condo</option>
            <option value="Cottage Or Cabin">Cottage Or Cabin</option>
            <option value="Chalet">Chalet</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea required style={{resize:'none'}} className="form-control" id="description" name="description" placeholder="Describe your listing" rows="3" ></textarea>
        </div>

        {/* Location */}
        <h5 className="mt-4">Location</h5>
        <div className="row g-3 mb-3">
              <div className="col-md-6">
            <input required type="text" className="form-control" name="country" placeholder="Country" />
          </div>

     <div className="col-md-6">
            <input required type="text" className="form-control" name="city" placeholder="City" />
          </div>
          <div className="col-md-6">
            <input required type="text" className="form-control" name="street" placeholder="Street"  />
          </div>
     
      
          <div className="col-md-6">
            <input required type="text" className="form-control" name="zipcode" placeholder="Zipcode" />
          </div>
        </div>

  
        <div className="row g-3 mb-3">
          <div className="col-md-4">
            <input required type="number" className="form-control" name="beds" placeholder="Beds" />
          </div>
          <div className="col-md-4">
            <input required type="number" className="form-control" name="baths" placeholder="Baths" />
          </div>
          <div className="col-md-4">
            <input required type="number" className="form-control" name="square_feet" placeholder="Square Feet" />
          </div>
        </div>




<div className="mb-3">
  
  <label className="form-label">Rates</label>

  <div className="form-check mb-2">
    
    
    <input
    
    required
      type="number"
      className="form-control mt-2"
      name="rates"
      placeholder="Rate per Day"
    />
  </div>



</div>



        {/* Amenities */}
        <h5 className="mb-2">Amenities</h5>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="wifi" name="amenities" value="Wifi" />
          <label className="form-check-label" htmlFor="wifi">Wifi</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="kitchen" name="amenities" value="Full kitchen" />
          <label className="form-check-label" htmlFor="kitchen">Full kitchen</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="washer" name="amenities" value="Washer & Dryer" />
          <label className="form-check-label" htmlFor="washer">Washer & Dryer</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="parking" name="amenities" value="Free Parking" />
          <label className="form-check-label" htmlFor="parking">Free Parking</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="hotTub" name="amenities" value="Hot Tub" />
          <label className="form-check-label" htmlFor="hotTub">Hot Tub</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="security" name="amenities" value="24/7 Security" />
          <label className="form-check-label" htmlFor="security">24/7 Security</label>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="images" className="form-label">Images (min-5) </label>
          <input  type="file" multiple  className="form-control" id="images" name="images" placeholder="image1.jpg,image2.jpg" />
         {limit&&(
           <div className="mt-2 ms-2 text-danger">Choose atleast 5 images </div>
             )}
        
        </div>

     

     
<Map coords={coords} setCoords={setCoords} />
{!online&&(
<p className="text-danger text-center">Make sure you have an internet connection</p>
)}
        <button disabled={!online} type="submit" className="mt-3 btn btn-primary">
        {loading==true?"Submitting....":"Submit"}
        </button>
     
      </form>
    </div>
  );
};

export default ListingForm;
