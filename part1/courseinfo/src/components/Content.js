import { Part } from './Part';

export const Content = ({ parts }) => (
  <section>
    <Part part={parts[0].name} exercise={parts[0].exercises} />
    <Part part={parts[1].name} exercise={parts[1].exercises} />
    <Part part={parts[2].name} exercise={parts[2].exercises} />
  </section>
);
