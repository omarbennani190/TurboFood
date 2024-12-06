import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from './../../context/StoreContext';
import { food_list } from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cardItems, food_list, removeFromCard, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item) => {
          if (cardItems[item.id] > 0) {
            return (
              <div key={item.id} className="cart-item-row">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <p>{item.name}</p>
                <p>{item.price} DH</p>
                <p>{cardItems[item.id]}</p>
                <p>{item.price * cardItems[item.id]} DH</p>
                <p onClick={() => removeFromCard(item.id)} className="remove-item">x</p>
              </div>
            )
          }

          return null;  // Retourner null si l'item n'est pas dans le panier
        })}

      </div>

      <div className="cart-bottom">
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
              <p>{getTotalCartAmount()===0?0:2} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} DH</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart