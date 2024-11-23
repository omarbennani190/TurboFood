import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// Create the context to share state and methods across components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // State to manage the cart items and their quantities
    const [cardItems, setCardItems] = useState({});

    // Function to add an item to the cart
    const addToCard = (itemId) => {
        if (!itemId || typeof itemId !== 'string') {
            console.error('Invalid itemId passed to addToCard:', itemId);
        }
        // Check if the item is already in the cart
        if (!cardItems[itemId]) {
            // If not, add it to the cart with a quantity of 1
            setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            // If it already exists, increase the quantity by 1
            setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    // Function to remove an item from the cart
    const removeFromCard = (itemId) => {
        // Update the cart state, reducing the quantity of the item by 1
        setCardItems((prev) => ({
            // Create a new state object based on the previous state
            ...prev, 
            [itemId]: prev[itemId] - 1//Update the quantity of the item with the given itemId, reducing it by 1
            //prev[itemId] retrieves the current quantity, and we subtract 1
        }));
    };

    // Function to calculate the total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0; // Initialize total amount
        for (const item in cardItems) {
            if (cardItems[item] > 0) { // Only calculate for items with quantity > 0
                // Find item details from food_list using the item's id
                let itemInfo = food_list.find((product) => product.id === item);
                // Add the price * quantity of the item to the total amount
                totalAmount += itemInfo.price * cardItems[item];
            }
        }
        return totalAmount; // Return the total calculated amount
    };

    // Effect to log the cart items whenever they change
    useEffect(() => {
        console.log(cardItems); // Log the updated cart items to the console
    }, [cardItems]); // Runs every time `cardItems` changes

    // Value to be provided by the context
    const contextValue = {
        food_list, // List of all food items
        cardItems, // Current state of the cart
        setCardItems, // State updater for the cart
        addToCard, // Method to add an item to the cart
        removeFromCard, // Method to remove an item from the cart
        getTotalCartAmount // Method to calculate the total amount
    };

    // Provide the context value to all child components
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
