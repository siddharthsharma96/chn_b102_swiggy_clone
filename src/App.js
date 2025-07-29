import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchrestaurants = async () => {
      try {
        const response = await fetch(
          "https://chn-b102-swiggy-clone.vercel.app/Restaurant.json"
        );
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data);
        }
      } catch (err) {}
    };
    fetchrestaurants();
  }, []);
  const addItem = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingIndex !== -1) {
      const updateCart = [...cartItems];
      updateCart[existingIndex].quantity += 1;
      setCartItems(updateCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingIndex !== -1) {
      const updateCart = [...cartItems];
      if (updateCart[existingIndex].quantity > 1) {
        updateCart[existingIndex].quantity -= 1;
      } else {
        updateCart.splice(existingIndex, 1);
      }
      setCartItems(updateCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Header cartItems={cartItems}></Header>
      <Outlet
        context={{
          restaurants,
          addItem,
          setCartItems,
          cartItems,
          addItem,
          removeItem,
          clearCart,
          setRestaurants,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
