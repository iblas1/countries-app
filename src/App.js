import React from "react";
import { Route, Switch } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import FilterCountry from "./components/FilterCountry";
import CountryProvider from "./components/store/CountryProvider";

const SingleCountry = React.lazy(() => import("./components/SingleCountry"));
function App() {
  return (
    <CountryProvider>
      <Switch>
        <Route path={"/"} exact>
          <FilterCountry />
          <div>
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
