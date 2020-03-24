import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const CountryCodeContext = createContext();

const CountryCodeContextProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios //?Call to get total timeline, where I can fetch country codes
      .get(
        "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/timeline/map-data.json"
      )
      .then(res => {
        const COUNTRY_INFO = res.data[54].data.map(obj => {
          let countryInfo = {
            countryID: obj.countrycode,
            countryName: obj.countrylabel
          };
          return countryInfo;
        });
        console.log("Country Code Fetch:", res.data);
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
