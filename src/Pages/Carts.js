import { useOutletContext } from "react-router-dom";
import "./../Style/cart.css";
import EmptyCart from "../Components/EmptyCart";
import CartItems from "../Components/CartItems";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cartItems, addItem, removeItem } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.defaultPrice;
    });
    setTotalPrice(total / 100);
  }, [cartItems]);

  console.log(process.env.REACT_APP_RAZORPAY_KEY);
  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY,
    key_secret: process.env.REACT_APP_RAZORPAY_KEY_SEC,
    amount: parseInt(totalPrice * 100),
    currency: "INR",
    order_receipt: "order_rcptid_",
    name: "E-Bharat",
    description: "Testing mode ",
    handler: function (response) {
      console.log(response);
    },
    theme: {
      color: "#3399cc",
    },
  };

  const handlePayment = () => {
    let pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <EmptyCart></EmptyCart>
      ) : (
        <CartItems
          cartItems={cartItems}
          addItem={addItem}
          removeItem={removeItem}
          totalPrice={totalPrice}
          handlePayment={handlePayment}
        ></CartItems>
      )}
    </div>
  );
};

export default Cart;
