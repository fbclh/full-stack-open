export const Total = ({ parts }) => {
  const sum = parts.reduce((acc, part) => acc + part.exercises, 0)
  return <h4>Number of exercises {sum}</h4>
}