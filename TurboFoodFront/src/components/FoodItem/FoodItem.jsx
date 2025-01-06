import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import './FoodItem.css'
import { assets } from './../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    // const [itemCount, setItemCount] = useState(0)
    const { cardItems, addToCart, removeFromCard,url } = useContext(StoreContext)

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={url+"/images/"+image} alt="food image" className="food-item-image" />
                {!cardItems[id]
                    ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="white icon" />
                    :<div className="food-item-counter">
                        <img onClick={()=>removeFromCard(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cardItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="stars" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">{price} DH</p>
            </div>
        </div>
    )
}

// const FoodItem = ({ id, name, price, description, image }) => {

//     const [itemCount, setItemCount] = useState(0)
//     // const { cardItems, addToCart, removeFromCard } = useContext(StoreContext)

//     console.log('FoodItem received id:', id)
//     // console.log('FoodItem received cardItems:', cardItems)

//     return (
//         <div className="food-item">
//             <div className="food-item-img-container">
//                 <img src={image} alt="food image" className="food-item-image" />
//                 {!itemCount
//                     ?<img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="white icon" />
//                     :<div className="food-item-counter">
//                         <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
//                         <p>{itemCount}</p>
//                         <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
//                     </div>
//                 }
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt="stars" />
//                 </div>
//                 <p className="food-item-desc">{description}</p>
//                 <p className="food-item-price">{price} DH</p>
//             </div>
//         </div>
//     )
// }

FoodItem.propTypes = {
    id: PropTypes.string.isRequired, // id doit être une chaîne de caractères et est requis
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  };

export default FoodItem