import c from "./Country.module.css";
import headerImage from "../images/computer.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCountry } from "./store/CountryProvider";

const Country = ({ countries }) => {
  return (
    <Link className={c.link} to={`/detail/${countries.name.common}`}>
      <div className={c.card}>
        <div className={c.header}>
          <img src={countries.flags.png} alt={"country-flag"} />
        </div>
        <div className={c.body}>
          <div className={c.countryName}>
            <h2>{countries.name.common}</h2>
          </div>
          <div className={c.stack}>
            <h5>Population:</h5>
            <p>{countries.population}</p>
          </div>
          <div className={c.stack}>
            <h5>Region:</h5>
            <p>{countries.region}</p>
          </div>
          <div className={c.stack}>
            <h5>Capital:</h5>
            <p>London</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
