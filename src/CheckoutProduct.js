import React from "react";
import { connect } from "react-redux";
import "./CheckoutProduct.css";
import { removeFromBasket } from "./basketActions";

function CheckoutProduct({
  id,
  title,
  quantity,
  image,
  price,
  rating,
  dispatch,
}) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <div>
            <small className="checkoutProduct__quantity">Quantity : {quantity}</small>
        </div>
        <button onClick={() => dispatch(removeFromBasket(id))}>Remove from basket</button>
      </div>
    </div>
  );
}
  export default connect()(CheckoutProduct);