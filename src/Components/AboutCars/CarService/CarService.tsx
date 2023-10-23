import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CarService.css";

export const CarService = () => {
  return (
    <div className="CarServiceComponent">
      <div className="CarServiceContainer">
        <div className="CarServices">
          <h3>Car</h3>
          <div>
            <a href="#" className="CarServiceTitle">
              Largest DealerShip of Car
            </a>
          </div>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </p>
          <div className="border"></div>
        </div>
        <div className="CarServices">
          <h3>Car</h3>
          <div>
            <a href="#" className="CarServiceTitle">
              Unlimited Repair Warrenty
            </a>
          </div>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </p>
          <div className="border"></div>
        </div>
        <div className="CarServices">
          <h3>Car</h3>
          <div>
            <a href="#" className="CarServiceTitle">
              Insurence Support
            </a>
          </div>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </p>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
};
