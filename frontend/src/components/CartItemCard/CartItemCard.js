import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context";
import './cartItemCard.css'
export const CartItemCard = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
      useContext(ShopContext);
  
    return (
      <div className="cartItem">
        <div className='img-box'>
        <img className="porduct-images" src={props.image} alt="product image" />
        </div>
        <div className="order-container">
          <p className="card-title" >{props.name}
          </p>
          <p className="card-price"> Price: ${props.price}</p>
          <div className="countHandler">
            <button className="plus-btn" onClick={() => removeFromCart(props.id)}> - </button>
            <input
              value={cartItems[props.id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), props.id)}
            />
            <button className="plus-btn" onClick={() => addToCart(props.id)}> + </button>
          </div>
        </div>
      </div>
    );
  };