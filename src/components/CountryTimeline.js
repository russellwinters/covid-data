import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CountryTimelineGraph from "./CountryTimelineGraph";
import CountryStats from "./CountryStats";

export default function CountryTimeline(props) {
  const [graphDataArray, setGraphDataArray] = useState([]);
  const [graphLabels, setGraphLabels] = useState([]);
  const [countryCode, setCountryCode] = useState(null);

  useEffect(() => {
    if (countryCode !== props.match.params.id) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTimeline=${props.match.params.id}`
        )
        .then(res => {
          let countryTimeline = res.data;
          let entries = Object.entries(countryTimeline.timelineitems[0]);
          let timeline = entries.filter(entry => {
            return entry[0] !== "stat";
          });

          //?Filtering for New Cases
          let newCasesRawData = timeline.map(entry => {
            return entry[1].new_daily_cases;
          });

          //?Filtering for Total Cases
          let totalCasesRawData = timeline.map(entry => {
            return entry[1].total_cases;
          });

          //?Filtering for Total Deaths
          let totalDeathsRawData = timeline.map(entry => {
            return entry[1].total_deaths;
          });

          //?Filtering for Total Recoveries
          let totalRecoveriesRawData = timeline.map(entry => {
            return entry[1].total_recoveries;
          });

          //?Filtering for Total Recoveries
          let timelineLabels = timeline.map(entry => {
            return entry[0];
          });
          //?Structuring data for Graph component
          setGraphLabels(timelineLabels);
          setGraphDataArray([
            ["New Cases", newCasesRawData],
            ["Total Cases", totalCasesRawData],
            ["Total Recoveries", totalRecoveriesRawData],
            ["Total Deaths", totalDeathsRawData]
          ]);
        });
      setCountryCode(props.match.params.id);
    }
  });

  const MAPPED_GRAPHS = graphDataArray.map((data, i) => {
    return (
      <CountryTimelineGraph
        key={i}
        lineLabel={data[0]}
        rawData={data[1]}
        axisLabels={graphLabels}
      />
    );
  });

  return (
    <div>
      <CountryStats {...props} />
      {MAPPED_GRAPHS}
    </div>
  );
}
