import { useOutletContext } from "react-router-dom";
import Carousel from "../Components/Carousuel";
import "./../Style/home.css";
import Card from "../Components/card";
const Home = () => {
  const { restaurants } = useOutletContext();
  //   console.log("homne page", restaurants);

  return (
    <div className="home">
      <Carousel></Carousel>
      <h2 className="home__heading">
        Restaurants with online food delivery in Noida
      </h2>
      <div className="home__card-container">
        {restaurants.map((res) => {
          return <Card show={true} res={res.info}></Card>;
        })}
      </div>
    </div>
  );
};

export default Home;
