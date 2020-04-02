import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MappedCountries({ data }) {
  const [fullCountryList, setFullCountryList] = useState([]);
  const [usedCountryList, setUsedCountryList] = useState([]);

  //Getting all country codes, filtering out unwanted data and storing in two different sets of state
  useEffect(() => {
    const ALL_COUNTRIES = data.countries.filter(obj => {
      return obj.countryID !== "" && obj.countryID !== " ";
    });
    setFullCountryList(ALL_COUNTRIES);
    setUsedCountryList(ALL_COUNTRIES);
    return () => {
      setFullCountryList(null);
      setUsedCountryList(null);
    };
  }, []);

  //Obviously the JSX I want to return for all the buttons
  const mappedCodes = usedCountryList.map((obj, i) => {
    return (
      <Link
        to={`/country/${obj.countryID}`}
        key={i}
        className="countries__buttons--link"
      >
        <button>{obj.countryName}</button>
      </Link>
    );
  });

  //Listener for Search input
  const SearchHandler = event => {
    event.preventDefault();

    let query = document.querySelector(".basicInput").value.toLowerCase();
    let currentList = fullCountryList.filter(obj => {
      return (
        obj.countryID.toLowerCase().includes(query) ||
        obj.countryName.toLowerCase().includes(query)
      );
    });
    setUsedCountryList(currentList);
  };

  return (
    <section className="countries">
      <div className="countries__search">
        <input
          className="basicInput"
          type="text"
          onChange={SearchHandler}
          placeholder="Search for country"
        />
      </div>

      <div className="countries__buttons">{mappedCodes}</div>
    </section>
  );
}
