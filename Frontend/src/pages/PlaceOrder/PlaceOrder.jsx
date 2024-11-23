import React, { useContext } from 'react'; 
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  // Extracting the getTotalCartAmount function from the context
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="container mt-4">
      <div className="row">
        {/* Delivery Information Section */}
        <div className="col-md-6">
          <h3 className="mb-4">Delivery Information</h3>
          <div className="row mb-3">
            
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>
         
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email address" />
          </div>
          
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Street" />
          </div>
         
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="State" />
            </div>
          </div>
        
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Phone number" />
          </div>
         
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="Zip code" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Country" />
            </div>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="col-md-6">
          <div className="card"> 
            <div className="card-body">
              <h3 className="card-title mb-4">Cart Totals</h3>
              
              <div className="d-flex justify-content-between mb-3">
                <p className="mb-0">Subtotal</p>
                <p className="mb-0">{getTotalCartAmount()} DH</p>
              </div>
              <hr />
            
              <div className="d-flex justify-content-between mb-3">
                <p className="mb-0">Delivery Fee</p>
                <p className="mb-0">{getTotalCartAmount() === 0 ? 0 : 2} DH</p>
              </div>
              <hr />
              {/* Total amount including delivery fee */}
              <div className="d-flex justify-content-between mb-3">
                <b>Total</b>
                <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} DH</b>
              </div>
              {/* Button to proceed to payment */}
              <button type="button" className="btn btn-orange w-100">PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder; 
