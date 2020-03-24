//!Dependencies
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//!Contexts
import { CountryCodeContextProvider } from "./contexts/CountryCodeContext";
import { GlobalStatsContextProvider } from "./contexts/GlobalStatsContext";
//!Components
import HomeGlobal from "./components/HomeGlobal";
import CountryTimeline from "./components/CountryTimeline";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
          
          <Link to="/">
            <h3>COVID Data</h3>
          </Link>
        </header> */}
        <Header />
        <main>
          <CountryCodeContextProvider>
            <GlobalStatsContextProvider>
              <Switch>
                <Route path="/" exact component={HomeGlobal} />
                <Route path="/country/:id" component={CountryTimeline} />
              </Switch>
            </GlobalStatsContextProvider>
          </CountryCodeContextProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
