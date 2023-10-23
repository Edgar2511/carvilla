import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarSlider.css";

const carsData = [
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/new-cars-model/ncm1.png",
    name: "Chevrolet Camaro ZA100",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    description2:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/new-cars-model/ncm2.png",
    name: "BMW series-3 wagon",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    description2:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/new-cars-model/ncm3.png",
    name: "Ferrari 488 Superfast",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    description2:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

const SliderComponent = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {carsData.map((car) => (
          <div className="NewestCarContainer">
            <div className="NewestCar">
              <img src={car.imageUrl} alt="#" />
            </div>
            <div className="NewestCarDescription">
              <h2>
                <a href="#">{car.name}</a>
              </h2>
              <p className="NewestCarParam">{car.description}</p>
              <p className="NewestCarParam2">{car.description2}</p>
              <button className="NewestCarButton">View Details</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
