import { useState } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Anecdote } from './components/Anecdote';
import { Votes } from './components/Votes';
import styles from './styles/App.module.css' ;


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
];

export const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); 
  // Array(anecdotes.length).fill(0) is same as [0,0,0,0,0,0,0,0,0,0]

  const randomAnecdotes = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const anecdoteVotes = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const highestVotedAnecdote = Math.max(...votes);
  const mostVotedAnecdote = anecdotes[votes.indexOf(Math.max(...votes))]; 
  // indexOf returns the index of the first element in the array that satisfies the provided testing function.

  return (
    <section className={styles.section}>
      <Header text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button onClick={randomAnecdotes} text="Next" />
      <Button onClick={anecdoteVotes} text="Vote" />
      <Header text="Anecdote with most votes" />
      <Anecdote anecdote={mostVotedAnecdote} />
      <Votes votes={highestVotedAnecdote} />
    </section>
  );
};
