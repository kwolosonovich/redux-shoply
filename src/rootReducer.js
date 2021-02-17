import data from "./data.json";

const DEFAULT_STATE = {
  products: data.products
};

function rootReducer(state = DEFAULT_STATE) {
  return state;
}

export default rootReducer;
