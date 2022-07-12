import c from "./Country.module.css";
import { Link } from "react-router-dom";
import { useCountry } from "./store/CountryProvider";

const Country = ({ countries }) => {
  const { setFilterCountry } = useCountry();
  const population = countries.population.toLocaleString("en-US");

  return (
    <Link
      className={c.link}
      to={`/detail/${countries.name.common}`}
      onClick={() => setFilterCountry(true)}
    >
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
            <p>{population}</p>
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
