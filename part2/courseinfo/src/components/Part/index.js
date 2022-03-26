import React from 'react'

const Part = ({part}) => {
  return (
    <div>
      <p>
        {part.name} 
        <i> - Exercises: {part.exercises}</i>
      </p>
    </div>
  )
}

export default Part;
