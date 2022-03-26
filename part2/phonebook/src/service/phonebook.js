import axios from 'axios';
const api = "https://espress-joshua.herokuapp.com/api/persons/";

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

const update = (id, {name, number}) =>
  new Promise((resolve, reject) => {
    axios.put(`${api}${id}`, {
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
  update
}

export default exports;
