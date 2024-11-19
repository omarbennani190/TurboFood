import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from './../../context/StoreContext';

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='Nom' />
          <input type="text" placeholder='Prenom' />
        </div>
        <input type="email" placeholder='Email adresse' />
        <input type="text" placeholder='Adresse' />
        <div className="multi-fields">
          <input type="text" placeholder='Ville' />
          <input type="text" placeholder='Région' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Code postal' />
          <input type="text" placeholder='Pays' />
        </div>
        <input type="text" placeholder='Telephone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivry Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} DH</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder