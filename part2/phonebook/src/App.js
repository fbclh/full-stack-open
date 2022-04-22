import { useState } from 'react';
import { Search } from './components/Search';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';

export const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
    } else {
      // setPersons(persons.concat(newPerson));
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const personsToShow = search
    ? persons.filter((person) => person.name.toLowerCase().includes(search))
    : persons;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <>
      <Search search={search} handleSearch={handleSearch} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <Persons personsToShow={personsToShow} />
    </>
  );
};
