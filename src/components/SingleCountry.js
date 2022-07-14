import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import c from "./SingleCountry.module.css";
import LoadingSpinner from "./UI/LoadingSpinner";
import useHttp from "./hooks/usehttp";
const SingleCountry = () => {
  const { getCountry, loading } = useHttp();
  const [country, setCountry] = useState([]);
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    const getData = (data) => {
      setCountry(data);
    };
    getCountry(
      `https://restcountries.com/v3.1/name/${params.countryId}`,
      getData
    );
  }, [params.countryId, getCountry]);
  console.log(country);
  let languages = [];
  let currencies = "";
  if (country.length > 0) {
    languages = Object.values(country[0].languages);
    console.log(languages);
    console.log(country[0].currencies);
    const currency = Object.values(country[0].currencies)[0];
    currencies = currency.name;
    // console.log(country[0].population.toLocaleString("en-US"));
  }

  const population =
    country.length > 0 ? country[0].population.toLocaleString("en-US") : "";

  return country.length < 1 && loading ? (
    <div>
      <LoadingSpinner />
    </div>
  ) : country.length < 1 && !loading ? (
    <div>check your internet connection</div>
  ) : (
    <div className={c.body}>
      <button className={c.back} onClick={() => history.goBack()}>
        Back
      </button>
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
                <b>Population:</b> {population}
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
              {country[0].borders
                ? country[0].borders.map((border) => (
                    <span key={border} className={c.box}>
                      {border}
                    </span>
                  ))
                : []}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
