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

  return (
    <div>
      <Header></Header>
      <Outlet
        context={{
          restaurants,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
