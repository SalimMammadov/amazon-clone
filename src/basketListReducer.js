export const initialState = {
  basket:[]
};

export const getBasketTotal = (basket)=>
  basket?.reduce((amount,item) => item.price * item.quantity  + amount,0)


function basketListReducer(state=initialState.basket, action) {
  switch (action.type) {
   
    case "ADD_TO_BASKET":
      var addedItem = state.find(i=>i.id === action.payload.id)
      if(addedItem){
       const newState=state.map(cartItem=>{
         if(cartItem.id === action.payload.id){
           return Object.assign({},addedItem,{quantity:addedItem.quantity + 1})
         }
         return cartItem
       })
       console.log(newState)
       return newState;
      }
      else 
      return  [...state,{...action.payload}]
    case "REMOVE_FROM_BASKET":
        const newstate = state.filter(item => item.id !== action.payload)
        return newstate
    default:
  return state;
  }
}

export default basketListReducer ;
