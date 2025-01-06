import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
// import { food_list } from "../assets/frontend_assets/assets"; image local

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cardItems, setCardItems] = useState({});
    const url = "http://localhost:4000";
    
    const [token,setToken] = useState("");

    const [food_list,setFood_list] = useState([]); // to fetch data from DB
    
    const addToCart = async (itemId) => {
        
        if (!itemId || typeof itemId !== 'string') {
            console.error('Invalid itemId passed to addToCart:', itemId);
        }
        // check if the user is adding the product in the card so we will create one entry
        if (!cardItems[itemId]) {
            setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        // Only proceed if the user is authenticated and the token is available
        if(token){ // when connected the product will be add to cartItem and DB
            try {
                await axios.post(url+"/api/food/add",{itemId},{headers:{token}});
                console.log('Food added successfully:');
            } catch (error) {
                console.error('Error adding food item:', error.response ? error.response.data : error.message);
            }
        }
    }

    const removeFromCard = (itemId) => {
        setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cardItems) {
            if(cardItems[item]>0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cardItems[item];
            }
        }
        return totalAmount;
    }

    // load items from DB
    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");        
        setFood_list(response.data.data);
    }

    const loadCartData = async (token) => {
        if(token){
            try {
                const response = await axios.post(url+"/api/cart/get",{},{headers:{token}}); // get cartData
                setCardItems(response.data.cartData); // store cartData
                console.log('Get successfully:');
            } catch (error) {
                console.error('Error getting food item:', error.response ? error.response.data : error.message);
            }
        }
    }

    // useEffect(() => {
    //     console.log(cardItems)
    // }, [cardItems]) //whenever cardItems is updated the arrow function will be executed

    useEffect(()=>{        
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token")); // reloading page will not be logedout
                await loadCartData(localStorage.getItem("token")); // keep change after reload
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cardItems,
        setCardItems,
        addToCart,
        removeFromCard,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;