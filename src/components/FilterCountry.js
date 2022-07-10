import { useState } from "react";
import c from "./FilterCountry.module.css";
import { useCountry } from "./store/CountryProvider";

const FilterCountry = (props) => {
  const [filterInput, setFilterInput] = useState("");
  const { countries, setFilterCountry, filteredCountry } = useCountry();
  console.log("filterinput==>", filterInput);
  console.log("countries=>", countries);
  const searchHandler = (e) => {
    if (filterInput.trim().length === 0) {
      return;
    }
    const searchCountry = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filterInput.toLowerCase())
    );
    setFilterCountry(searchCountry);
    setFilterInput("");
    console.log("after search", countries);
  };

  const seeAllHandler = () => {
    setFilterCountry(false);
  };

  let seeAll;
  if (filteredCountry) {
    seeAll = <button onClick={seeAllHandler}>see All Countries</button>;
  }
  return (
    <div className={c.filter}>
      <input
        value={filterInput}
        type={"text"}
        name={"filter"}
        onChange={(e) => setFilterInput(e.target.value)}
      />
      <button onClick={searchHandler}>find</button>
      {seeAll}
    </div>
  );
};

export default FilterCountry;
