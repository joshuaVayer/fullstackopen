import React from "react";

const StatisticLine = ({label, value}) => (
  <div className="hits-component">
    {label}:
    <span className="hits_counts">{value}</span>
  </div>
)

export default StatisticLine