import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import c from "./FilterCountry.module.css";
import { useCountry } from "./store/CountryProvider";

const FilterCountry = (props) => {
  const [selectItem, setSelectItem] = useState("");
  const history = useHistory();
  const {
    countries,
    setFilterCountry,
    filteredCountry,
    filterInput,
    setFilterInput,
  } = useCountry();
  console.log("filterinput==>", filterInput);
  console.log("countries=>", countries);

  useEffect(() => {
    if (selectItem) {
      const filterCount = countries.filter(
        (country) => country.region === selectItem
      );
      setFilterCountry(filterCount);
    }
  }, [selectItem, countries, setFilterCountry]);
  console.log(filteredCountry);

  console.log(selectItem);

  console.log(selectItem);

  return (
    <div className={c.main}>
      <div className={c.filter}>
        <input
          value={filterInput}
          type={"text"}
          name={"filter"}
          onChange={(e) => setFilterInput(e.target.value)}
        />
      </div>
      <div className={c.filter}>
        <select
          defaultValue={""}
          className={c.select}
          name="cars"
          id="regions"
          onChange={(e) => setSelectItem(e.target.value)}
        >
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterCountry;
