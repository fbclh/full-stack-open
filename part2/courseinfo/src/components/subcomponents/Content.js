import { Part } from './Part'

export const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercise={part.exercises} />
    ))}
  </>
)

// console.log(parts)
//  The component should be changed to its longer form in order for us to add the printing logs
