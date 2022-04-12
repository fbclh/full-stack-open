export const Total = ({ parts }) => (
  <h3>
    Number of exercises:{' '}
    {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </h3>
);
