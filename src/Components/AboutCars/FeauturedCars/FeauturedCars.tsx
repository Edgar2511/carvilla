import "./FeauturedCars.css";
import { AboutCarTitleCard } from "../AboutCarTitleCard/AboutCarTitleCard";
import { FeauturedCarCard } from "./FeauturedCarCard/FeauturedCarCard";

export const FeauturedCars = () => {
  return (
    <div className="FeauturedCars">
      <AboutCarTitleCard
        checkout={"Checkout the Featured Cars"}
        title={"Featured Cars"}
      />
      <div className="FeauturedCarsContainer">
        <div className="FeauturedCar">
          <FeauturedCarCard />
        </div>
      </div>
    </div>
  );
};
