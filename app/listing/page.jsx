'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import {filterListings} from '@/hooks/ServerAction'
import { useState,useEffect } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FilterAction } from '@/hooks/ServerAction';

const page = () => {
  const router=useRouter()
const searchParams = useSearchParams()
const name = searchParams.get('name');
const [listing,setListing]=useState([])
const scrollDiv=useRef();


  const type = searchParams.get("type");
  const price = searchParams.get("price");
  const country = searchParams.get("country");

useEffect(() => {

    FilterAction(name)
    .then((res) => {
      setListing(() => [...JSON.parse(res)]);
    });
  
}, [name]);



const typePriceOrCountry = (key, value) => {
  const params = new URLSearchParams(window.location.search);
  
  if (name) params.set("name", name);

  if (value) {
    params.set(key, value);
  } 
 router.push(`?${params.toString()}`);
};

useEffect(() => {


filterListings(name,type,price,country)
.then((res)=>{
  setListing(JSON.parse(res))
})
}, [searchParams]);


 return (
      <>
        <div className="container">
          <div className="row">


            <div className="col-4">
               <div>
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <select defaultValue={type} onChange={(e)=>typePriceOrCountry('type',e.target.value)} className="form-select" id="type" name="type" required >
            <option >Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="studio">Studio</option>
            <option value="condo">Condo</option>
            <option value="cottage or Cabin">Cottage Or Cabin</option>
            <option value="chalet">Chalet</option>
            <option value="all">All</option>
    

          </select>
        </div>

          </div>



           <div className="col-4">
               <div>
          <label htmlFor="type" className="form-label">
           Price Range
          </label>
          <select defaultValue={price} onChange={(e)=>typePriceOrCountry('price',e.target.value)}  className="form-select" id="type" name="type" required >
            <option value="">Price Range</option>
            <option value="100">less than  100</option>
            <option value="1000">less than 1000</option>
            <option value="5000">less than 5000</option>
            <option value="10000">less than 10000</option>
            <option value="100000">less than 100000</option>
    

          </select>
        </div>

             </div>



          <div className="col-lg-4">
  <div>
    <label htmlFor="country" className="form-label">
      Country
    </label>
    <select defaultValue={country} onChange={(e)=>typePriceOrCountry('country',e.target.value)}  className="form-select" id="country" name="country" required>
      <option value="">Select Country</option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Albania">Albania</option>
      <option value="Algeria">Algeria</option>
      <option value="Andorra">Andorra</option>
      <option value="Angola">Angola</option>
      <option value="Argentina">Argentina</option>
      <option value="Armenia">Armenia</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Barbados">Barbados</option>
      <option value="Belarus">Belarus</option>
      <option value="Belgium">Belgium</option>
      <option value="Belize">Belize</option>
      <option value="Benin">Benin</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Bolivia">Bolivia</option>
      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
      <option value="Botswana">Botswana</option>
      <option value="Brazil">Brazil</option>
      <option value="Brunei">Brunei</option>
      <option value="Bulgaria">Bulgaria</option>
      <option value="Burkina Faso">Burkina Faso</option>
      <option value="Burundi">Burundi</option>
      <option value="Cambodia">Cambodia</option>
      <option value="Cameroon">Cameroon</option>
      <option value="Canada">Canada</option>
      <option value="Cape Verde">Cape Verde</option>
      <option value="Central African Republic">Central African Republic</option>
      <option value="Chad">Chad</option>
      <option value="Chile">Chile</option>
      <option value="China">China</option>
      <option value="Colombia">Colombia</option>
      <option value="Congo">Congo</option>
      <option value="Costa Rica">Costa Rica</option>
      <option value="Croatia">Croatia</option>
      <option value="Cuba">Cuba</option>
      <option value="Cyprus">Cyprus</option>
      <option value="Czech Republic">Czech Republic</option>
      <option value="Denmark">Denmark</option>
      <option value="Djibouti">Djibouti</option>
      <option value="Dominican Republic">Dominican Republic</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Egypt">Egypt</option>
      <option value="El Salvador">El Salvador</option>
      <option value="Estonia">Estonia</option>
      <option value="Ethiopia">Ethiopia</option>
      <option value="Finland">Finland</option>
      <option value="France">France</option>
      <option value="Germany">Germany</option>
      <option value="Ghana">Ghana</option>
      <option value="Greece">Greece</option>
      <option value="Guatemala">Guatemala</option>
      <option value="Guyana">Guyana</option>
      <option value="Haiti">Haiti</option>
      <option value="Honduras">Honduras</option>
      <option value="Hong Kong">Hong Kong</option>
      <option value="Hungary">Hungary</option>
      <option value="Iceland">Iceland</option>
      <option value="India">India</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Iran">Iran</option>
      <option value="Iraq">Iraq</option>
      <option value="Ireland">Ireland</option>
      <option value="Israel">Israel</option>
      <option value="Italy">Italy</option>
      <option value="Jamaica">Jamaica</option>
      <option value="Japan">Japan</option>
      <option value="Jordan">Jordan</option>
      <option value="Kazakhstan">Kazakhstan</option>
      <option value="Kenya">Kenya</option>
      <option value="South Korea">South Korea</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Kyrgyzstan">Kyrgyzstan</option>
      <option value="Laos">Laos</option>
      <option value="Latvia">Latvia</option>
      <option value="Lebanon">Lebanon</option>
      <option value="Liberia">Liberia</option>
      <option value="Libya">Libya</option>
      <option value="Lithuania">Lithuania</option>
      <option value="Luxembourg">Luxembourg</option>
      <option value="Madagascar">Madagascar</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Maldives">Maldives</option>
      <option value="Mali">Mali</option>
      <option value="Malta">Malta</option>
      <option value="Mexico">Mexico</option>
      <option value="Moldova">Moldova</option>
      <option value="Monaco">Monaco</option>
      <option value="Mongolia">Mongolia</option>
      <option value="Morocco">Morocco</option>
      <option value="Mozambique">Mozambique</option>
      <option value="Myanmar">Myanmar</option>
      <option value="Nepal">Nepal</option>
      <option value="Netherlands">Netherlands</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Norway">Norway</option>
      <option value="Oman">Oman</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Panama">Panama</option>
      <option value="Papua New Guinea">Papua New Guinea</option>
      <option value="Paraguay">Paraguay</option>
      <option value="Peru">Peru</option>
      <option value="Philippines">Philippines</option>
      <option value="Poland">Poland</option>
      <option value="Portugal">Portugal</option>
      <option value="Qatar">Qatar</option>
      <option value="Romania">Romania</option>
      <option value="Russia">Russia</option>
      <option value="Rwanda">Rwanda</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Serbia">Serbia</option>
      <option value="Singapore">Singapore</option>
      <option value="Slovakia">Slovakia</option>
      <option value="Slovenia">Slovenia</option>
      <option value="South Africa">South Africa</option>
      <option value="Spain">Spain</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="Sweden">Sweden</option>
      <option value="Switzerland">Switzerland</option>
      <option value="Syria">Syria</option>
      <option value="Taiwan">Taiwan</option>
      <option value="Tajikistan">Tajikistan</option>
      <option value="Tanzania">Tanzania</option>
      <option value="Thailand">Thailand</option>
      <option value="Turkey">Turkey</option>
      <option value="Ukraine">Ukraine</option>
      <option value="United Arab Emirates">United Arab Emirates</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="United States">United States</option>
      <option value="Uruguay">Uruguay</option>
      <option value="Uzbekistan">Uzbekistan</option>
      <option value="Venezuela">Venezuela</option>
      <option value="Vietnam">Vietnam</option>
      <option value="Yemen">Yemen</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>
    </select>
  </div>
          </div>




          </div>
        </div>





          <div ref={scrollDiv}   className="container my-4" style={{height:'100vh',overflowY:'scroll'}}>
          <h2 className="fw-semibold mb-4">Results</h2>
        
          <div className="row g-4">
            {listing?.map((listing, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <div className="card h-100 shadow-sm border-0 rounded-3">
                  <div className="position-relative" style={{ height: "200px" }}>
                   <Link href={`/listing/${listing?._id}`} style={{cursor:'pointer'}}>
                    <Image
                      className="card-img-top rounded-top-3 object-cover"
                      alt="img"
                      src={listing.images[0]}
                      fill
                      sizes="100%"
                    />
                    </Link>
                  </div>
        
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-title text-truncate mb-2">
                      {listing.name}
                      {listing.type}
                    </h6>
        
                    <div className="mt-auto">
                      
                          <div className="text-muted">
                            {listing?.rates} Rs / night
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </>
    )
  }
// }else{
//        return(
//          <div style={{height:'57vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
//         <img src="\listings\no-results.png" width={100} height={100} />
      
//         <h1 className="text-muted fw-light">No Result Found</h1>
//         <GoBack/>
//       </div>
//        )
// }
   
//   }



export default page