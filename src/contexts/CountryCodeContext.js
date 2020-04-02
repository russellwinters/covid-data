import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const CountryCodeContext = createContext();

const CountryCodeContextProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios //?Call to get total timeline, where I can fetch country codes
      .get("https://api.thevirustracker.com/free-api?countryTotals=ALL")
      .then(res => {
        // console.log(Object.values(res.data.countryitems[0]));
        const COUNTRY_INFO = Object.values(res.data.countryitems[0]).map(
          obj => {
            let countryInfo = {
              countryID: obj.code,
              countryName: obj.title
            };
            return countryInfo;
          }
        );
        let newCountryInfo = COUNTRY_INFO; //Setting countryInfo in variable to parse data
        let countryListLength = COUNTRY_INFO.length; //Setting the length to a variable so that I can Set length of new info minus the last list item (undefined)
        newCountryInfo.length = countryListLength - 1; //Only going through this process so I can come back to log if API I'm using changes
        setCountries(newCountryInfo);
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
