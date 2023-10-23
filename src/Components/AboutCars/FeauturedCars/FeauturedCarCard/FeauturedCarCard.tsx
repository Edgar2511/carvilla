import "./FeauturedCarCard.css";

interface FeauturedCarCardProps {
  imageUrl: string;
  model: string;
  gearbox: string;
  carName: string;
  price: string;
  aboutCar: string;
}

const FeauturedCarsData: FeauturedCarCardProps[] = [
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/featured-cars/fc1.png",
    model: "Model: 2017 3100 Mi 240HP",
    gearbox: "Automatic",
    carName: "BMW 6-Series Gran Coupe",
    price: "$89,395",
    aboutCar:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/featured-cars/fc2.png",
    model: "Model: 2017 3100 Mi 240HP",
    gearbox: "Automatic",
    carName: "Chevrolet Camaro WMV2",
    price: "$66,575",
    aboutCar:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/featured-cars/fc3.png",
    model: "Model: 2017 3100 Mi 240HP",
    gearbox: "Automatic",
    carName: "Lamborghini V520",
    price: "$125,250",
    aboutCar:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/featured-cars/fc4.png",
    model: "Model: 2017 3100 Mi 240HP",
    gearbox: "Automatic",
    carName: "Audi A3 Sedan",
    price: "$95,500",
    aboutCar:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/featured-cars/fc4.png",
    model: "Model: 2017 3100 Mi 240HP",
    gearbox: "Automatic",
    carName: "Infiniti Z5",
    price: "$36,850",
    aboutCar:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/featured-cars/fc5.png",
    model: "Model: 2017 3100 Mi 240HP",
    gearbox: "Automatic",
    carName: "Porsche 718 Cayman",
    price: "$48,500",
    aboutCar:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/featured-cars/fc7.png",
    model: "Model: 2017 3100 Mi 240HP",
    gearbox: "Automatic",
    carName: "BMW 8-Series Coupe",
    price: "$56,000",
    aboutCar:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    imageUrl: "http://127.0.0.1:5500/assets/images/featured-cars/fc8.png",
    model: "Model: 2017 3100 Mi 240HP",
    gearbox: "Automatic",
    carName: "BMW Xseries-6",
    price: "$75,800",
    aboutCar:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
];

export const FeauturedCarCard = () => {
  return (
    <div className="FeauturedCarCard">
      {FeauturedCarsData.map((FeauturedCar) => (
        <div className="FeauturedCarContainer">
          <div className="FeauturedCarImg">
            <img src={FeauturedCar.imageUrl} alt="#" />
          </div>
          <div className="FeauturedCarModelType">
            <p>{FeauturedCar.model}</p>
            <p>{FeauturedCar.gearbox}</p>
          </div>
          <h2 className="FeauturedCarName">{FeauturedCar.carName}</h2>
          <p className="FeauturedCarPrice">{FeauturedCar.price}</p>
          <p className="aboutFeauturedCar">{FeauturedCar.aboutCar}</p>
        </div>
      ))}
    </div>
  );
};
