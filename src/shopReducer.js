export const initialState = {
  products: [],
  total: 0,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, products: payload.products };
    case "REMOVE_FROM_CART":
      return { ...state, products: payload.products };
    case "CALCULATE_TOTAL":
      return { ...state, total: payload.total };
    default:
      return new Error("unkown reducer");
  }
};

export default shopReducer;
