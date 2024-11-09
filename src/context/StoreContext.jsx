import React ,{ createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cardItems, setCardItems] = useState({});

    const addToCard = (itemId) => {
        if (!itemId || typeof itemId !== 'string') {
            console.error('Invalid itemId passed to addToCard:', itemId);            
        }
        // check if the user is adding the product in the card so we will create one entry
        if (!cardItems[itemId]) {
            setCardItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCard = (itemId) => {
        setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(() => {
        console.log(cardItems)
    }, [cardItems]) //chaque modif

    const contextValue = {
        food_list,
        cardItems,
        setCardItems,
        addToCard,
        removeFromCard
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;