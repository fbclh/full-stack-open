import { Header } from './subcomponents/Header'
import { Content } from './subcomponents/Content'
import { Total } from './subcomponents/Total'

export const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)
