import axios from 'axios';

const getAll = () =>
  new Promise((resolve, reject) => {
    axios.get('http://localhost:3001/persons')
      .then(response => resolve(response.data))
      .catch(reject);
  });

const add = ({name, number}) =>
  new Promise((resolve, reject) => {
    axios.post('http://localhost:3001/persons', {
      name,
      number,
    })
      .then(response => resolve(response.data))
      .catch(reject);
  });

const remove = (id) =>
  new Promise((resolve, reject) => {
    axios.delete(`http://localhost:3001/persons/${id}`)
      .then(response => resolve(response.data))
      .catch(reject);
  });

const exports = {
  getAll,
  add,
  remove,
}

export default exports;
