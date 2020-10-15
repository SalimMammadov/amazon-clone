import React from 'react'
import './SubTotal.css'
import * as CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';
import {getBasketTotal} from './basketListReducer'

function SubTotal({basket}) {
    return (
        <div className="subtotal">
           <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button >Proceed to Checkout</button>
        </div>
    )
}
function mapStateToProps(state){
    return {
        basket : state.basketListReducer
    }
}
export default  connect(mapStateToProps)(SubTotal)
