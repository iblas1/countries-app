import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import FilterCountry from "./components/FilterCountry";
import CountryProvider from "./components/store/CountryProvider";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const SingleCountry = React.lazy(() => import("./components/SingleCountry"));
function App() {
  return (
    <CountryProvider>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </CountryProvider>
  );
}

export default App;
