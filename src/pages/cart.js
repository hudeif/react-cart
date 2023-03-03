import CartProducts from "../components/CartProducts";
import Payment from "../components/Payment";
import useShop from "../ShopContext";
import { Link } from "react-router-dom";

const pStyle = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#333",
};

const Cart = () => {
  const { products } = useShop();

  if (products.length === 0)
    return (
      <div className="cart-container">
        <p style={{ pStyle }}>
          soryy your cart is empty please <Link to="/">add to cart</Link>
        </p>
      </div>
    );
  return (
    <>
      <div className="cart-container cart-grid">
        <CartProducts />
        <Payment />
      </div>
    </>
  );
};

export default Cart;
