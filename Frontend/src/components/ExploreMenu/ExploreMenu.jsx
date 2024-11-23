import React from 'react';
import { menu_list } from './../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="container my-5 text-center" id='explore-menu'>
      <h1 className="mb-3">Explore our menu</h1>
      <p className="text-muted mb-4">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
      </p>
      <div className="d-flex justify-content-center flex-wrap gap-4">
        {/* Iterate over the 'menu_list' array to display each menu item */}
        {menu_list.map((item, index) => (
          // A clickable div for each menu item, with a unique key based on the index
          <div key={index} className="text-center"
            // Handle the click event to toggle the selected category
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
          >
            {/* Display the menu item's image with a rounded-circle style */}
            <img
              className={`rounded-circle ${category === item.menu_name ? "border border-danger" : ""}`} // Highlight the selected menu item with a red border
              src={item.menu_image} // Set the image source to the menu item's image
              alt="menu"
              width="80" 
              style={{ cursor: 'pointer' }} 
            />
            {/* Display the menu item's name below the image */}
            <p className="mt-2">{item.menu_name}</p>
          </div>
        ))}
      </div>
    
      <hr className="my-4" />
    </div>
  );
};

export default ExploreMenu;
