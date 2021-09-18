import React, { useState } from "react";
import Button from "../../Controls/Button";
import Title from "../Title";
import Statistic from "../Statistic";

const StatisticsScreen = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  const getAll = () => good + neutral + bad;
  const getAverage = () => (good - bad) / getAll();
  const getPositive = () => `${(good / getAll()) * 100} %`;

  return (
    <div className="statistics-screen">
      <div className="statistics-screen-buttons">
        <Button text="good" onClick={handleClickGood} />
        <Button text="neutral" onClick={handleClickNeutral} />
        <Button text="bad" onClick={handleClickBad} />
      </div>
      <div className="statistics-screen-hits">
        <Title text="statitics"/>
        <Statistic label="Good" counts={good}/>
        <Statistic label="Neutral" counts={neutral}/>
        <Statistic label="Bad" counts={bad}/>
        <Statistic label="All" counts={getAll()}/>
        <Statistic label="Average" counts={getAverage()}/>
        <Statistic label="Positive" counts={getPositive()}/>
      </div>
    </div>
  )
}

export default StatisticsScreen;