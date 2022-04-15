export const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return <h4>Number of exercises {total}</h4>
}

// export const Total = ({ parts }) => (
//   <h3>
//     Number of exercises:{' '}
//     {parts[0].exercises + parts[1].exercises + parts[2].exercises}
//   </h3>
// )