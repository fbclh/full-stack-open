import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = ((good * 1 + neutral * 0 + bad * -1) / total).toFixed(1);
  const positive = ((good / total) * 100).toFixed(1);

  if (good === 0 && neutral === 0 && bad === 0) {
    return <h4>No feedback given</h4>;
  } else
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} sign={'%'} />
      </div>
    );
};

const StatisticLine = ({ text, value, sign }) => {
  return (
    <p>
      {text} {value} {sign}
    </p>
  );
};

const Button = ({ onClick, text }) => (
  <>
    <button onClick={onClick}>{text}</button>
  </>
);

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
        <Button onClick={handleGood} text="good" />
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" />
      </section>
      <section>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </section>
    </>
  );
};

export default App;
