import { useState } from 'react';

const Header = ({ text }) => <h2>{text}</h2>;

export const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  // The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

  const randomAnecdotes = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const AnecdoteVotes = () => {
    const votesCopy = [...votes];
    votesCopy[selected] = votesCopy[selected] + 1;
    setVotes(votesCopy);
    console.log(votesCopy);
  };

  // const highestVote = Math.max(...votes);
  // const highestVotedAnecdote = anecdotes[votes.indexOf(Math.max(...votes))];

  return (
    <section>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <h5>Has {votes[selected]} votes</h5>
      <button onClick={AnecdoteVotes}>Vote</button>
      <button onClick={randomAnecdotes}>Next</button>
      <Header text="Anecdote with most votes" />
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <h5>Has {Math.max(...votes)} votes</h5>
    </section>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
];
