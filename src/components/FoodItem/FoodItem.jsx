import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets} from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ _id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext); // Usecontext API Intigration
console.log(cartItems);

  return ( 
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={url+"/images/"+image} alt={name} />
        {!cartItems[_id] ? (
          <img className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white} 
            alt="add_icom"
          />
        ) : (
          <div className="food-item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove_icon_red" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add_icon_green" />
          </div>
        )}
      </div>
      <div className="food-item-info"> 
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
