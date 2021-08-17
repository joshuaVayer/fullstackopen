import React from 'react'

const Total = ({parts}) => {
  const getTotal = () => {
    let total = 0;
    parts.forEach(part => {
      total = total + part.exercises
    });
    return total;
  }

  return (
    <div>
      <p>Number of exercises {getTotal()} </p>
    </div>
  )
}

export default Total;
