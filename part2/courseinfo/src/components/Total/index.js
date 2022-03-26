import React from 'react'

const Total = ({parts}) => {
  const getTotal = () => {
    let total = parts.reduce((acc, part) => {
      return acc + part.exercises
    }, 0)
    return total;
  }

  return (
    <div>
      <p>Number of exercises {getTotal()} </p>
    </div>
  )
}

export default Total;
