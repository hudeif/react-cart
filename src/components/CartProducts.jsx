import useShop from "../ShopContext";

const CartProducts = () => {
  const { products, removeFromCart, total } = useShop();

  return (
    <div className="cart-products">
      <h3>Cart items</h3>
      {products.map((product) => {
        return (
          <div className="cart-product" key={product.id}>
            <div className="cart-title-img">
              <img src={product.urlImage} alt="" />
              <span>{product.name}</span>
            </div>
            <h5>${product.price}</h5>
            <span className="delete" onClick={() => removeFromCart(product)}>
              ✖
            </span>
          </div>
        );
      })}
      <div className="total-price">
        <h4>Total price : ${total}</h4>
      </div>
    </div>
  );
};

export default CartProducts;
