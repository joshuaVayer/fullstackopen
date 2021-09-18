import React from "react";

const Statistic = ({label, counts}) => (
  <div className="hits-component">
    {label}:
    <span className="hits_counts">{counts}</span>
  </div>
)

export default Statistic