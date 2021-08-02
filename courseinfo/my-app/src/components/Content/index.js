import React from 'react'

const Content = ({parts}) => {

  return (
    <div>
      {parts.map(part => (
        <p>
          {part.name} 
          <i> - Exercises: {part.exercises}</i>
        </p>
      ))}
    </div>
  )
}

export default Content;
