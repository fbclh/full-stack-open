import { StatsLine } from './StatsLine';

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = ((good * 1 + neutral * 0 + bad * -1) / total).toFixed(1);
  const positive = `${((good / total) * 100).toFixed(0)}%`;

  if (total === 0) return <p>No feedback given</p>;
  else
    return (
      <table>
        <tbody>
          <StatsLine text="Good" value={good} />
          <StatsLine text="Neutral" value={neutral} />
          <StatsLine text="Bad" value={bad} />
          <StatsLine text="Total" value={total} />
          <StatsLine text="Average" value={average} />
          <StatsLine text="Positive" value={positive} />
        </tbody>
      </table>
    );
};
