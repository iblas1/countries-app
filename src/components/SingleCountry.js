import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import c from "./SingleCountry.module.css";
import axios from "axios";
import LoadingSpinner from "./UI/LoadingSpinner";
const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${params.countryId}`)
      .then((res) => {
        setCountry(res.data);
      });
  }, [params.countryId]);
  console.log(country);
  let languages = [];
  let currencies = "";
  if (country.length > 0) {
    languages = Object.values(country[0].languages);
    console.log(languages);
    console.log(country[0].currencies);
    const currency = Object.values(country[0].currencies)[0];
    currencies = currency.name;
  }

  return country.length < 1 ? (
    <div>
      <LoadingSpinner />
    </div>
  ) : (
    <div className={c.body}>
      <div className={c.main}>
        <div className={c.part1}>
          <img src={country[0].flags.svg} alt="flag" />
        </div>
        <div className={c.part2}>
          <div className={c.countryname}>{country[0].name.common}</div>
          <div className={c.leftright}>
            <div className={c.left}>
              <div>
                <b>Native name:</b> {country[0].name.official}
              </div>
              <div>
                <b>Population:</b> {country[0].population}
              </div>
              <div>
                <b>Region:</b> {country[0].region}
              </div>
              <div>
                <b>Sub Region:</b> {country[0].subregion}
              </div>
              <div>
                <b>Capital:</b> {country[0].capital[0]}
              </div>
            </div>
            <div className={c.right}>
              <div>
                <b>Top level Domain:</b> {country[0].tld[0]}
              </div>
              <div>
                <b>Currencies: </b> {currencies}
              </div>
              <div>
                <b>Languages: </b> {languages.join(", ")}
              </div>
            </div>
          </div>
          <div className={c.border}>
            <p>
              <b>Border countries: </b>
            </p>
            {country[0].borders
              ? country[0].borders.map((border) => (
                  <div key={border} className={c.box}>
                    {border}
                  </div>
                ))
              : []}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
