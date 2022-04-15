import { Part } from './Part'

export const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises}/>
      ))}
    </div>
  )
}

// export const Content = ({ parts }) => (
//   <section>
//     <Part part={parts[0].name} exercise={parts[0].exercises} />
//     <Part part={parts[1].name} exercise={parts[1].exercises} />
//     <Part part={parts[2].name} exercise={parts[2].exercises} />
//   </section>
// )

// console.log(parts) 
// [ { name: 'Fundamentals of React', exercises: 10, id: 1 },
//  The component should be changed to its longer form in order for us to add the printing:
