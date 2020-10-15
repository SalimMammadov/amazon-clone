import React from "react";
import { connect } from "react-redux";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout({ basket }) {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt=""
          src="https://ss-times.com/wp-content/uploads/2019/05/banner-ad-fail-11.jpg"
          className="checkout__ad"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket...</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                quantity={item.quantity}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
      <div className="checkout__right">
          <SubTotal />
      </div>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    basket: state.basketListReducer,
  };
}

export default connect(mapStateToProps)(Checkout);
