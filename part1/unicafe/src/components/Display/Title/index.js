import React from "react";

const Title = ({text}) => {
  const capitalize = string => {
    if (string) 
    return `${string.toUpperCase()[0]}${string.slice(1)}`
  }

  return (
    <div className="title-component">
      <h1 className="title">
        {capitalize(text)}
      </h1>
    </div>
  )

}

export default Title;