import React from "react";
import { connect } from "react-redux";
import "./Product.css";
import { addToBasket } from "./basketActions";

function Product({ id, title, image, price, rating, addToBasket }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button
        onClick={()=>addToBasket({
          id,
          quantity:1,
          title,
          image,
          price,
          rating,
        })}
      >
        Add to Basket
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    basket: state.basketListReducer,
  };
}

const mapDispatchToProps = {
  addToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
