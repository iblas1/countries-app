import { useContext, useState } from "react";
import React from "react";

export const countryContext = React.createContext({
  country: "",
  setCountry: () => {},
  countries: [],
  filteredCountry: false,
  setCountries: () => {},
  setFilterCountry: () => {},
});

export const useCountry = () => {
  const ctx = useContext(countryContext);
  return ctx;
};
const CountryProvider = (props) => {
  const [country, setCountry] = useState([]);
  const [filteredCountry, setFilterCountry] = useState(false);
  const [countries, setCountries] = useState([]);
  const value = {
    country: country,
    setCountry: setCountry,
    filteredCountry: filteredCountry,
    countries: countries,
    setCountries: setCountries,
    setFilterCountry: setFilterCountry,
  };
  return (
    <countryContext.Provider value={value}>
      {props.children}
    </countryContext.Provider>
  );
};

export default CountryProvider;
