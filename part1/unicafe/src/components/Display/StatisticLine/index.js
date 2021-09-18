import React from "react";

const StatisticLine = ({label, value}) => (
  <tr>
    <td>{label}</td>
    <td>:</td>
    <td>{value}</td>
  </tr>
)

export default StatisticLine