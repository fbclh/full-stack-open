import { useState } from 'react'

export const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      setPersons(persons.concat(newPerson))
      // setPersons([...persons, newPerson])
      setNewName('')
      setNewNumber('')
    }
  }

  // const handleSearch = (event) => {
  //   const searchName = event.target.value
  //   const filteredPersons = persons.filter((person) =>
  //     person.name.toLowerCase().includes(searchName.toLowerCase())
  //   )
  //   setPersons(filteredPersons)
  // }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const personsToShow = search
    ? persons.filter((person) => person.name.toLowerCase().includes(search))
    : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <>
      <h1>Phonebook</h1>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      {/* <h2>Add Contact</h2> */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={handleNameChange}
            value={newName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Number"
            required
            onChange={handleNumberChange}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
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
  )
}
