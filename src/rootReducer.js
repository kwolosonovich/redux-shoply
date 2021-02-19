import { ADD_TO_CART, REMOVE_FROM_CART} from "./actionTypes";
import data from "./data.json";

const calculateCartTotal = (products, cart, discountAmount = 0) => {
  let total = 0;
  for (let id in products) {
    const { price } = products[id];
    const quantity = cart[id] || 0;
    total += price * quantity;
  }
  let totalWithDiscount = total * (1 - discountAmount);
  return totalWithDiscount.toFixed(2);
}

const DEFAULT_STATE = {
  products: data.products,
  shoppingCart: {}
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartCopy = { ...state.cartItems };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return {
        ...state,
        cartItems: cartCopy,
        cartValue: calculateCartTotal(
          state.products,
          cartCopy,
          state.discountAmount
        ),
      };
    }
    case REMOVE_FROM_CART: {
      const cartCopy = { ...state.cartItems };
      if (!cartCopy[action.id]) return state;
      cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id];
      }
      return {
        ...state,
        cartItems: cartCopy,
        cartValue: calculateCartTotal(
          state.products,
          cartCopy,
          state.discountAmount
        ),
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
