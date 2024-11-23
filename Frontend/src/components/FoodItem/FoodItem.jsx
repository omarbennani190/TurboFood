import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from './../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({ id, name, price, description, image }) => {
    // Extract relevant state and methods from the StoreContext using useContext hook
    const { cardItems, addToCard, removeFromCard } = useContext(StoreContext);

    return (
        <div className="card h-100 food-item">
            {/* Display the food item's image */}
            <img src={image} className="card-img-top food-item-image" alt="food" />
            <div className="card-body food-item-info">
                {/* Food item name as the card title */}
                <h5 className="card-title">{name}</h5>

                {/* Food item description */}
                <p className="card-text food-item-desc">{description}</p>

                {/* Footer section with price and cart interaction */}
                <div className="d-flex justify-content-between align-items-center">
                    {/* Display the price of the food item */}
                    <span className="text-danger food-item-price">{price} DH</span>

                    {/* Conditional rendering: check if the item is in the cart */}
                    {!cardItems[id] ? (
                        // If not in the cart, show an "Add" icon
                        <img
                            className="add-icon"
                            onClick={() => addToCard(id)} // Add item to cart when clicked
                            src={assets.add_icon_white} 
                            alt="Add"
                        />
                    ) : (
                        // If in the cart, show a counter with "Add More" and "Remove" options
                        <div className="d-flex align-items-center food-item-counter">
                            {/* Remove icon to decrease quantity */}
                            <img
                                onClick={() => removeFromCard(id)} // Remove item from cart when clicked
                                src={assets.remove_icon_red} 
                                alt="Remove" 
                            />
                            {/* Display the current quantity in the cart */}
                            <p className="mb-0">{cardItems[id]}</p>
                            {/* Add More icon to increase quantity */}
                            <img
                                onClick={() => addToCard(id)} // Add another item to cart when clicked
                                src={assets.add_icon_green}
                                alt="Add More"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
