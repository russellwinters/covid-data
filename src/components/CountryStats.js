import React, { useState, useEffect } from "react";
import axios from "axios";
import VirusResults from "./VirusResults";

export default function CountryStats({ match }) {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTotal=${match.params.id}`
      )
      .then(res => {
        setCountryData(res.data.countrydata[0]);
      });
    return () => {
      setCountryData(null);
    };
  }, []);

  return (
    <div>
      {countryData ? (
        <VirusResults data={countryData} label={countryData.info.title} />
      ) : (
        <></>
      )}
    </div>
  );
}
