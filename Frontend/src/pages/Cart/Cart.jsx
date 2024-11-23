import React, { useContext } from 'react';
import { StoreContext } from './../../context/StoreContext'; 
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  // Destructuring required properties and functions from the context
  const { cardItems, food_list, removeFromCard, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div className="container py-4">
     
      <div className="card border-light shadow-sm mb-4">
       
        <div className="card-header bg-light font-weight-bold">Your Cart</div>
        <div className="card-body">
          <div className="cart-items">
            
            <table className="table table-hover mb-0">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Title</th> 
                  <th scope="col">Price</th> 
                  <th scope="col">Quantity</th> 
                  <th scope="col">Total</th>
                  <th scope="col">Remove</th> 
                </tr>
              </thead>
              <tbody>
                {/* Iterating through the food_list to render cart items */}
                {food_list.map((item) => {
                  if (cardItems[item.id] > 0) {
                    return (
                      <tr key={item.id}> {/* Key for React list rendering */}
                        <td>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded cart-item-image"
                          />
                        </td>
                        <td>{item.name}</td> {/* Display item name */}
                        <td>{item.price} DH</td> {/* Display item price */}
                        <td>{cardItems[item.id]}</td> {/* Display quantity */}
                        <td>{item.price * cardItems[item.id]} DH</td> {/* Display total for this item */}
                        <td className="text-center">
                          {/* Button to remove item from cart */}
                          <button
                            onClick={() => removeFromCard(item.id)} // Call removeFromCard when clicked
                            className="btn btn-danger btn-sm"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return null; // Skip items not in the cart
                })}
              </tbody>
            </table>
          </div>

          <div className="cart-bottom row mt-4">
            {/* Promo Code Input Section */}
            <div className="cart-promocode-input col-md-12 col-lg-6 mb-4 mb-lg-0">
              <h5 className="font-weight-bold">If you have a promo code, enter it here:</h5>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                  aria-label="Promo code"
                />
                <button>SUBMIT</button> 
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="cart-totals col-md-12 col-lg-6">
              <h3 className="font-weight-bold">Cart Totals</h3>
              <div className="mb-3 border-top pt-3">
                {/* Subtotal */}
                <div className="d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p>{getTotalCartAmount()} DH</p> {/* Display total cart amount */}
                </div>
                {/* Delivery Fee */}
                <div className="d-flex justify-content-between mt-2">
                  <p>Delivery Fee</p>
                  <p>{getTotalCartAmount() === 0 ? 0 : 2} DH</p> {/* Delivery fee, 0 if no items */}
                </div>
                <hr />
                {/* Grand Total */}
                <div className="d-flex justify-content-between font-weight-bold">
                  <p>Total</p>
                  {/* Add delivery fee to subtotal if subtotal > 0 */}
                  <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} DH</p>
                </div>
              </div>
              {/* Proceed to checkout button */}
              <button
                onClick={() => navigate('/order')} // Navigate to order page when clicked
                className="order"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 