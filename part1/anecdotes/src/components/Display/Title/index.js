import React from "react";
import { capitalize } from "../../../utils";

const Title = ({text}) => (
    <div className="title-component">
      <h1 className="title">
        {capitalize(text)}
      </h1>
    </div>
);

export default Title;