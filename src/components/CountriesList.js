import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./UI/CardUI";
import c from "./CountriesList.module.css";
import Country from "./Country";
import { useCountry } from "./store/CountryProvider";
import LoadingSpinner from "./UI/LoadingSpinner";
import useHttp from "./hooks/usehttp";

const url = "https://restcountries.com/v3.1/all";
const CountriesList = () => {
  const { countries, setCountries, filteredCountry } = useCountry();
  const { loading, getCountry } = useHttp();
  //      {
  //     params: {
  //       fields: "name,population,region,capital,flags,callingCodes",
  //     },
  //   }
  useEffect(() => {
    const receiveData = (data) => {
      setCountries(data);
    };
    getCountry(url, receiveData);
    // axios
    //   .get(
    //     url
    //   )
    //   .then((res) => {
    //     const { data } = res;
    //     console.log(data);
    //     setCountries(data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  console.log(loading);

  const compare = (a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  };
  const slicedCountry = [...countries].sort(compare);
  console.log(slicedCountry);

  //   if (slicedCountry.length < 1) {
  //     return <LoadingSpinner />;
  //   }
  slicedCountry.length < 1 ? (
    <LoadingSpinner />
  ) : filteredCountry.length >= 1 ? (
    <div className={c.body}>
      <div className={c.main}>
        {filteredCountry.map((country) => (
          <Country countries={country} key={country.name.common} />
        ))}
      </div>
    </div>
  ) : (
    <Card>
      {slicedCountry.map((country) => (
        <Country countries={country} key={country.name.common} />
      ))}
    </Card>
  );

  let display;

  display = (
    <Card>
      {slicedCountry.map((country) => (
        <Country countries={country} key={country.name.common} />
      ))}
    </Card>
  );
  if (slicedCountry.length < 1 && loading) {
    display = <LoadingSpinner />;
  }

  if (slicedCountry.length < 1 && !loading) {
    display = <div>Error: Check your internet connection</div>;
  }
  if (filteredCountry.length >= 1) {
    display = (
      <div className={c.body}>
        <div className={c.main}>
          {filteredCountry.map((country) => (
            <Country countries={country} key={country.name.common} />
          ))}
        </div>
      </div>
    );
  }

  return <>{display}</>;
  // <Card>
  //   {slicedCountry.map((country) => (
  //     <Country countries={country} key={country.name.common} />
  //   ))}
  // </Card>
};

export default CountriesList;
