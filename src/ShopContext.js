import { createContext } from "react";
import { useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updated = state.products.concat(product);
    calculateTotal(updated);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updated,
      },
    });
  };

  const removeFromCart = (product) => {
    const products = state.products.filter((p) => p.id !== product.id);
    calculateTotal(products);
    dispatch({ type: "REMOVE_FROM_CART", payload: { products } });
  };

  const calculateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: "CALCULATE_TOTAL",
      payload: { total },
    });
  };

  const values = {
    products: state.products,
    total: state.total,
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) throw new Error("context must be userd");
  return context;
};

export default useShop;
