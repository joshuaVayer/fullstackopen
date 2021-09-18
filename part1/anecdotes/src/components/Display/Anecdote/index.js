import React from "react";
import { capitalize } from "../../../utils";

const Anecdote = ({text, votes}) => {
  return (
    <div>
      <p className="anecdote-component">
        {capitalize(text)}
      </p>
      <span>Has <strong>{votes}</strong> votes</span>
    </div>
  )

}

export default Anecdote;