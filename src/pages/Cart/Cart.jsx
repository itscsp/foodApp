import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
// import { food_list } from "../../assets/assets";
import { Link } from "react-router-dom";

const Cart = ({setShowLogin}) => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext);
 
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div> 
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item"> 
                  <img src={url+"/images/"+item.image} alt="cart-item-image" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
                </div> 
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deliver Fee</p>
              <p>{getTotalCartAmount() ? '$2' : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() ? getTotalCartAmount() + 2 : 0}</p>
            </div>
            <hr />
          </div>
          {!token && <button className="btn"  onClick={() => setShowLogin(true)} >Proceed to Checkout</button>}
          {token && <Link className="btn" to={'/order'}>Proceed to Checkout</Link>}

            
        </div>
        <div className="cart-promocode"> 
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text"  placeholder="promo code"/>  
              <button>Submit</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
 