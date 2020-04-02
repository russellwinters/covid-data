import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const CountryCodeContext = createContext();

const CountryCodeContextProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios //?Call to get total timeline, where I can fetch country codes
      .get("https://api.thevirustracker.com/free-api?countryTotals=ALL")
      .then(res => {
        console.log(Object.values(res.data.countryitems[0]));
        const COUNTRY_INFO = Object.values(res.data.countryitems[0]).map(
          obj => {
            let countryInfo = {
              countryID: obj.code,
              countryName: obj.title
            };
            return countryInfo;
          }
        );
        console.log("Country Code Fetch:", COUNTRY_INFO);
        setCountries(COUNTRY_INFO);
      });

    return () => {
      setCountries(null);
    };
  }, []);

  return (
    <CountryCodeContext.Provider value={{ countries: countries }}>
      <>{children}</>
    </CountryCodeContext.Provider>
  );
};

export { CountryCodeContext, CountryCodeContextProvider };
