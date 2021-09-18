import React, { useState } from 'react'
import data from "./anecdotes.json"

// Compos
import Button from './components/Button';
import Anecdote from './components/Display/Anecdote';
import Title from './components/Display/Title';

const App = () => {
  const { anecdotes } = data;
  const totalAnecdotes = anecdotes.length;
  // Initialize vote object
  const startingVotes = {};
  anecdotes.forEach( (_ , index) => {
    startingVotes[index] = Math.floor(Math.random() * 10)
  });

  // Initialise state
  const [currentAnecdote, setCurrentAnecdote] = useState(0);
  const [votes, setVotes] = useState({...startingVotes});

  // Handle functions
  const handleNextClick = () => {
    setCurrentAnecdote(Math.floor(Math.random() * totalAnecdotes));
  };
  const handleVoteClick = () => {
    const prevVotes = {...votes};
    prevVotes[currentAnecdote]++;
    setVotes(prevVotes);
  };

  // Getters
  const getBestAnecdote = () => {
    const higherVote = Math.max(...Object.values(votes));
    return Object.values(votes).findIndex(vote => vote === higherVote);
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote text={anecdotes[currentAnecdote]} votes={votes[currentAnecdote]} />
      <div style={{ display: "flex", gap: "10px"}}>
        <Button text={"Next anecdote"} onClick={handleNextClick} />
        <Button text={"Vote"} onClick={handleVoteClick} />
      </div>
      <Title text="Anecdote with the most votes" />
      <Anecdote text={anecdotes[getBestAnecdote()]} votes={votes[getBestAnecdote()]} />
    </div>
  );
}

export default App;
// That's it 😘
