import { Route, Switch } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";
import FilterCountry from "./components/FilterCountry";
import SingleCountry from "./components/SingleCountry";
import CountryProvider, {
  useCountry,
} from "./components/store/CountryProvider";

function App() {
  return (
    <CountryProvider>
      <Switch>
        <Route path={"/"} exact>
          <div>
            <FilterCountry />
            <CountriesList />
          </div>
        </Route>
        <Route path={"/detail/:countryId"}>
          <SingleCountry />
          {/* <div>hello</div> */}
        </Route>
      </Switch>
    </CountryProvider>
  );
}

export default App;
