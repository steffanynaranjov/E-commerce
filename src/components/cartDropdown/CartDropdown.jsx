import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";
import "./cartdropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckOutHandler}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
