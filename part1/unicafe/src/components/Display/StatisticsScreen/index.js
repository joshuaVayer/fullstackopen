import React, { useState } from "react";
import Button from "../../Controls/Button";
import Title from "../Title";
import StatisticLine from "../StatisticLine";

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
      <Title text="statitics"/>
      { getAll() ? (
        <div className="statistics-screen-details">
          <StatisticLine label="Good" value={good}/>
          <StatisticLine label="Neutral" value={neutral}/>
          <StatisticLine label="Bad" value={bad}/>
          <StatisticLine label="All" value={getAll()}/>
          <StatisticLine label="Average" value={getAverage()}/>
          <StatisticLine label="Positive" value={getPositive()}/>
        </div>
      ) : (
        <div>No feedback given 😕</div>
      )}
    </div>
  )
}

export default StatisticsScreen;