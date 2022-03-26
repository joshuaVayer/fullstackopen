require("dotenv").config();
const mongoose = require("mongoose");

// eslint-disable-next-line no-undef
const { MONGODB_URI } = process.env;


mongoose.connect(MONGODB_URI).then(() => {
  console.log("Connected to MongoDB 🎉")
}).catch(error => {
  console.log("error connecting to MongoDB:", error.message)
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model("Person", personSchema)

const find = () =>
  new Promise((resolve, reject) => {
    Person.find({}).then(result => {
      resolve(result)
    }).catch(error => {
      reject(error)
    })
  });

const create = ({ name, number }) =>
  new Promise((resolve, reject) => {
    const person = new Person({
      name,
      number
    })
    person.save().then(result => {
      resolve(result)
    }).catch(error => {
      reject(error)
    })
  });

const remove = (id) =>
  new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error("id missing"))
      return;
    }
    Person.findByIdAndRemove(id).then(result => {
      resolve(result)
    }).catch(error => {
      reject(error)
    })
  });

const update = (id, { name, number }) =>
  new Promise((resolve, reject) => {
    Person.findByIdAndUpdate(id, { name, number }).then(result => {
      resolve(result)
    }).catch(error => {
      reject(error)
    })
  });

module.exports = {
  find,
  create,
  remove,
  update
};