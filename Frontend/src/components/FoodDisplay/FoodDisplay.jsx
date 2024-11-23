import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import Statistics from '../Statistics/Statistics';

const FoodDisplay = ({ category }) => {
    // Access 'food_list' from the StoreContext using the useContext hook
    const { food_list } = useContext(StoreContext);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Top dishes near you</h2>
            <div className="row">
                {/* Iterate over the food_list array to display food items */}
                {food_list.map((item) => {
                    // Check if the item matches the selected category or if the category is "All"
                    if (category === "All" || category === item.category) {
                        return (
                            <div className="col-md-3 mb-4" key={item.id}>
                                {/* Render the FoodItem component with props for each food item */}
                                <FoodItem
                                    id={item.id} // Pass the item's id as a prop
                                    name={item.name} // Pass the item's name as a prop
                                    description={item.description} // Pass the item's description as a prop
                                    price={item.price} // Pass the item's price as a prop
                                    image={item.image} // Pass the item's image as a prop
                                />
                            </div>
                        );
                    }
                    // Return null if the item does not match the selected category
                    return null;
                })}
            </div>

            {/* Call the Statistics component to display statistical information */}
            <Statistics />
        </div>
    );
};

export default FoodDisplay;
