import React, { useState, useEffect, useContext } from "react";
import VirusResults from "./VirusResults";
import { CountryCodeContext } from "../contexts/CountryCodeContext";
import MappedCountries from "./MappedCountries";
import { GlobalStatsContext } from "../contexts/GlobalStatsContext";

export default function HomeGlobal() {
  //*Context brought in here
  const countryCodes = useContext(CountryCodeContext);
  const GlobalStats = useContext(GlobalStatsContext);

  return (
    <div>
      {GlobalStats.data ? (
        <VirusResults data={GlobalStats.data} label="Global" />
      ) : (
        <></>
      )}
      {countryCodes.countries !== null ? (
        <MappedCountries data={countryCodes} />
      ) : (
        <></>
      )}
    </div>
  );
}
