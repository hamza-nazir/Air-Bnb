import React from 'react'

const Filters = () => {
  return (
 <div className="container">
      <div className="row">
        <div className="col-3">
            <div className="mb-3">
          <label htmlFor="type">
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
        </div>
        
          <div className="col-3">
            <div className="mb-3">
          <label htmlFor="type">
           Price Range
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
        </div>
      </div>
    </div>
  )
}

export default Filters