import "./NewestCars.css";
import { AboutCarTitleCard } from "../AboutCarTitleCard/AboutCarTitleCard";
import SliderComponent from "./CarSlider/CarSlider";

export const NewestCars = () => {
  return (
    <div className="NewestCars">
      <AboutCarTitleCard
        checkout={"Checkout the Latest Cars"}
        title={"Newest Cars"}
      />
      <SliderComponent />
    </div>
  );
};
