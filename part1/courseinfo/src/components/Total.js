export const Total = (props) => {
  return (
    <>
      <h3>
        Number of exercises:{' '}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </h3>
    </>
  );
};
