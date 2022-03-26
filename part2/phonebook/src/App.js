import { useState, useEffect } from 'react'
import Filter from './components/Filter'

import personsService from './service/phonebook'

import "./index.css";

const App = () => {

  const [_isMounted, setIsMounted] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [persons, setPersons] = useState([]);
  const [statusMessage, setStatusMessage] = useState(null)

  useEffect(() => {
    if (!_isMounted) {
      fetchData();
      setIsMounted(true)
    }
  }, [persons, _isMounted]);

  const fetchData = () => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  };


  const handleAddPerson = () => {
    if (!name || !number) {
      alert('Name and number are required');
      return;
    }

    const newPerson = { name, number };

    const isDuplicate = persons.some(person => person.name === newPerson.name);

    if (isDuplicate) {
      personsService.update(persons.find(person => person.name === newPerson.name)._id, newPerson)
        .then(fetchData)
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

  const handleDeletePerson = ({name, _id}) => {
    const isConfirmed = window.confirm(`Delete ${name}?`);

    if (isConfirmed) {
      personsService
        .remove(_id)
        .then(() => fetchData())
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