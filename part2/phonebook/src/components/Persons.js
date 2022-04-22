export const Persons = ({ personsToShow }) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.name}
            {': '}
            {person.number}
          </li>
        ))}
      </ul>
    </>
  );
};
