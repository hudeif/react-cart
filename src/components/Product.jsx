import { useEffect } from "react";
import { useState } from "react";
import useShop from "../ShopContext";

const Product = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);

  const { addToCart, removeFromCart, products } = useShop();

  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  useEffect(() => {
    const cart = products.filter((p) => p.id === product.id);
    if (cart.length > 0) setIsInCart(true);
    else setIsInCart(false);
  }, [products]);

  return (
    <div
      className="card"
      style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(${product.urlImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
      <button
        className={`btn btn-${isInCart ? "danger" : "primary"}`}
        onClick={handleAddToCart}
      >
        {isInCart ? "-" : "+"}
      </button>
    </div>
  );
};

export default Product;
