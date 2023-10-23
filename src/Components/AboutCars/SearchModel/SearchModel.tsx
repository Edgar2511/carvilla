import "./SearchModel.css";

export const SearchModel = () => {
  return (
    <div className="SearchModel">
      <div className="optionContainer">
        <div>
          <p className="optionTitle">Select Year</p>
          <select className="formControl">
            <option value="default">Year</option>
            <option value="2018">2016</option>
            <option value="2018">2017</option>
            <option value="2019">2018</option>
          </select>
        </div>
        <div>
          <p className="optionTitle">Body Style</p>
          <select className="formControl">
            <option value="default">Style</option>
            <option value="2018">Sedan</option>
            <option value="2019">Van</option>
            <option value="2019">Roadster</option>
          </select>
        </div>
      </div>
      <div className="optionContainer">
        <div>
          <p className="optionTitle">Select Make</p>
          <select className="formControl">
            <option value="default">Make</option>
            <option value="2018">Totota</option>
            <option value="2018">Holden</option>
            <option value="2019">Mercedes-Benz</option>
          </select>
        </div>
        <div>
          <p className="optionTitle">Car Condition</p>
          <select className="formControl">
            <option value="default">Condition</option>
            <option value="2018">Something</option>
            <option value="2019">Something</option>
            <option value="2019">Something</option>
          </select>
        </div>
      </div>
      <div className="optionContainer">
        <div>
          <p className="optionTitle">Select Model</p>
          <select className="formControl">
            <option value="default">Model</option>
            <option value="2018">Kia-Rio</option>
            <option value="2018">Mitsubishi</option>
            <option value="2019">Ford</option>
          </select>
        </div>
        <div>
          <p className="optionTitle">Select Price</p>
          <select className="formControl">
            <option value="default">Price</option>
            <option value="2018">$0.00</option>
            <option value="2019">$0.00</option>
            <option value="2019">$0.00</option>
          </select>
        </div>
      </div>
      <div className="formControlButtonContainer">
        <button className="formControlButton">Search</button>
      </div>
    </div>
  );
};
