import { useState, useEffect } from 'react'
import Filter from './components/Filter'

import personsService from './service/phonebook'

import "./index.css";

const App = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [statusMessage, setStatusMessage] = useState(null)
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, []);

  const handleAddPerson = () => {
    if (!name || !number) {
      alert('Name and number are required');
      return;
    }

    const newPerson = {
      name: name,
      number: number,
    };

    const isDuplicate = persons.some(person => person.name === newPerson.name);

    if (isDuplicate) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    personsService
      .add(newPerson)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        setName('')
        setNumber('')
        setStatusMessage({ text: `${addedPerson.name} was added to the phonebook`, className: 'success' })
      });

  };

  const handleDeletePerson = ({name, id}) => {
    const isConfirmed = window.confirm(`Delete ${name}?`);

    if (isConfirmed) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
          {statusMessage && <p className={statusMessage.className} >{statusMessage.text}</p>}
        <Filter persons={persons} setPersons={setPersons} />
      <form>
        <div>
          <div>
            name: <input type="text" value={name} onChange={event => setName(event.target.value)} />
          </div>
          <div>
            number: <input type="text" value={number} onChange={event => setNumber(event.target.value)} />
          </div>
        </div>
        <div>
        </div>
      </form>
      <button onClick={handleAddPerson}>add</button>
      <h2>Numbers</h2>
      {persons.map(person =>
        <div key={person.name}>
          <span>{person.name} - {person.number} </span>
          <button onClick={() => handleDeletePerson(person)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default App