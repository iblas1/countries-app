import { useEffect } from "react";
import Card from "./UI/CardUI";
import Country from "./Country";
import { useCountry } from "./store/CountryProvider";
import LoadingSpinner from "./UI/LoadingSpinner";
import useHttp from "./hooks/usehttp";
import { restCountryUrl, restCountryParams } from "./utils/url";

const CountriesList = () => {
  const { countries, setCountries, filterInput, filteredCountry } =
    useCountry();
  const { loading, getCountry } = useHttp();

  useEffect(() => {
    const receiveData = (data) => {
      setCountries(data);
    };
    getCountry(restCountryUrl, receiveData, restCountryParams);
  }, [getCountry, setCountries]);
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
  const slicedCountry = [...countries]
    .filter((country) =>
      country.name.common.toLowerCase().includes(filterInput.toLowerCase())
    )
    .sort(compare);
  console.log(slicedCountry);

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
      <Card>
        {filteredCountry
          .filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(filterInput.toLowerCase())
          )
          .sort(compare)
          .map((country) => (
            <Country countries={country} key={country.name.common} />
          ))}
      </Card>
    );
  }

  return <>{display}</>;
};

export default CountriesList;
