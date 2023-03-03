import { Link } from "react-router-dom";
import useShop from "../ShopContext";
import "../style.css";
const Header = () => {
  const { products } = useShop();

  return (
    <div className="menu">
      <Link to="/" className="logo">
        Reactify
      </Link>
      <ul className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </ul>
      <Link to="/cart">
        <span className="count">{products.length}</span>
      </Link>
    </div>
  );
};

export default Header;
