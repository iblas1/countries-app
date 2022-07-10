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
  const languages =
    country.length > 0 ? Object.values(country[0].languages) : [];
  console.log(languages);
  //   const languages = [];
  //   for (const e in selectedCountry.languages) {
  //     languages.push(selectedCountry.languages[e]);
  //   }
  //   console.log(languages);
  return country.length < 1 ? (
    <div>
      <LoadingSpinner />
    </div>
  ) : (
    <div className={c.body}>
      <div className={c.main}>
        <div className={c.part1}>
          {/* <img src={selectedCountry.flags.svg} alt="flag" /> */}
        </div>
        <div className={c.part2}>
          <p>
            {" "}
            <b>capital: </b> hello
          </p>
          <br />
          <p>region:{country[0].region}</p>
          <br />
          <p>
            Languages :{languages.join(", ")}
            {/* {languages.map((lang, i) => (
              <span key={i}>{lang} </span>
            ))} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
