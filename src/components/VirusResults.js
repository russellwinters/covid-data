import React, { useState } from "react";

export default function VirusResults({ data, label }) {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <main className="virus-stats">
      <h1 onClick={toggleOpen}>{label} Statistics</h1>
      <div>
        <section style={{ display: open ? "block" : "none" }}>
          <h3>Totals</h3>
          <p>
            Total Cases: <span>{data.total_cases}</span>
          </p>
          <p>
            Total Recovered: <span>{data.total_recovered}</span>
          </p>
          <p>
            Total Deaths: <span>{data.total_deaths}</span>
          </p>
          <p>
            Global Unresolved: <span>{data.total_unresolved}</span>
          </p>
        </section>
        <section style={{ display: open ? "block" : "none" }}>
          <h3>Today:</h3>
          <p>
            New Cases: <span>{data.total_new_cases_today}</span>
          </p>
          <p>
            Recent Deaths: <span>{data.total_new_deaths_today}</span>
          </p>
        </section>
        <section style={{ display: open ? "block" : "none" }}>
          <h3>Active Cases:</h3>
          <p>
            Total Active Cases: <span>{data.total_active_cases}</span>
          </p>
          <p>
            Serious Cases: <span>{data.total_serious_cases}</span>
          </p>
        </section>
      </div>
    </main>
  );
}
