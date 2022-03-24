import axios from 'axios';
const api = "http://localhost:3001/api/persons/";

const getAll = () =>
  new Promise((resolve, reject) => {
    axios.get(api)
      .then(response => resolve(response.data))
      .catch(reject);
  });

const add = ({name, number}) =>
  new Promise((resolve, reject) => {
    axios.post(api, {
      name,
      number,
    })
      .then(response => resolve(response.data))
      .catch(reject);
  });

const remove = (id) =>
  new Promise((resolve, reject) => {
    axios.delete(`${api}${id}`)
      .then(response => resolve(response.data))
      .catch(reject);
  });

const exports = {
  getAll,
  add,
  remove,
}

export default exports;
