import React from "react";
import Card from "./Card";

function DashBoard() {
  const cards = [
    { id: 1, title: "EARNINGS (MONTHLY)", data: "$40,000", theme: "primary" },
    { id: 2, title: "EARNINGS (ANNUAL)", data: "$215,000", theme: "success" },
    { id: 3, title: "TASKS", data: "50%", theme: "info" },
    { id: 4, title: "PENDING REQUESTS", data: "18", theme: "warning" },
  ];
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        {cards.map((card) => {
          return <Card card={card} key={card.id}></Card>;
        })}
      </div>
    </div>
  );
}

export default DashBoard;
