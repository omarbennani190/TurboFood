import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from './../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
// import { assets } from './../../../../assets/frontend_assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
    // const [itemCount, setItemCount] = useState(0)
    const { cardItems, addToCard, removeFromCard } = useContext(StoreContext)

    console.log('FoodItem received id:', id)
    console.log('FoodItem received cardItems:', cardItems)

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={image} alt="food image" className="food-item-image" />
                {!cardItems[id]
                    ?<img className="add" onClick={()=>addToCard(id)} src={assets.add_icon_white} alt="white icon" />
                    :<div className="food-item-counter">
                        <img onClick={()=>removeFromCard(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cardItems[id]}</p>
                        <img onClick={()=>addToCard(id)} src={assets.add_icon_green} alt="" />
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

export default FoodItem