import React from "react";
import { Line } from "react-chartjs-2";

export default function CountryTimelineGraph({
  lineLabel,
  rawData,
  axisLabels
}) {
  const GraphData = {
    //All data to input for graph
    labels: axisLabels,
    datasets: [
      {
        label: lineLabel,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#ffcc66",
        borderColor: "#ffcc66",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#5ccfe6",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#5ccfe6",
        pointHoverBorderColor: "#5ccfe6",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: rawData
      }
    ]
  };

  return (
    <div
      className="country-graph"
      // style={{ width: "75vw", margin: "0 auto", padding: "24px" }}
    >
      <Line
        data={GraphData}
        options={
          ({ legend: { labels: { fontColor: "#ffcc66" } } },
          {
            scales: {
              yAxes: [{ ticks: { fontColor: "#5ccfe6" } }],
              xAxes: [{ ticks: { fontColor: "#5ccfe6" } }]
            }
          })
        }
      />
    </div>
  );
}
