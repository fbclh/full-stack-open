import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <section>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>
        Average{' '}
        {((good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)).toFixed(
          2
        )}
      </p>
      <p>Positive {Math.round((good / (good + neutral + bad)) * 100)}%</p>
    </section>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <section>
        <h2>Give feedback</h2>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </section>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
