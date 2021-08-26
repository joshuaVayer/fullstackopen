import React, { useState } from "react";
import Button from "../../Controls/Button";
import Title from "../Title";
import Hits from "../Hits";

const StatisticsScreen = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  return (
    <div className="statistics-screen">
      <div className="statistics-screen-buttons">
        <Button text="good" onClick={handleClickGood} />
        <Button text="neutral" onClick={handleClickNeutral} />
        <Button text="bad" onClick={handleClickBad} />
      </div>
      <div className="statistics-screen-hits">
        <Title text="statitics"/>
        <Hits label="Good" counts={good}/>
        <Hits label="Neutral" counts={neutral}/>
        <Hits label="Bad" counts={bad}/>
      </div>
    </div>
  )
}

export default StatisticsScreen;