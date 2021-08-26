import React from "react";

const Hits = ({label, counts}) => (
  <div className="hits-component">
    {label}:
    <span className="hits_counts">{counts}</span>
  </div>
)

export default Hits