export const Total = (props) => {
  return (
    <>
      <h3>
        Number of exercises:{' '}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </h3>
    </>
  );
};
