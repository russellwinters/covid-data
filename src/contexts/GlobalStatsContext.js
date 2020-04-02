import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const GlobalStatsContext = createContext();

const GlobalStatsContextProvider = ({ children }) => {
  const [globalStats, setGlobalStats] = useState(null);

  useEffect(() => {
    axios //Call to get canadian stats
      .get("https://api.thevirustracker.com/free-api?global=stats")
      .then(res => {
        setGlobalStats(res.data.results[0]);
      });

    return () => {
      setGlobalStats(null);
    };
  }, []);

  return (
    <GlobalStatsContext.Provider value={{ data: globalStats }}>
      <>{children}</>
    </GlobalStatsContext.Provider>
  );
};

export { GlobalStatsContext, GlobalStatsContextProvider };
