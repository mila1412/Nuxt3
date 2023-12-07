import mongoose from "mongoose";

// people schema
const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: String,
  },
});

const people = mongoose.model("mila-nuxt", schema, "people");

// people model
export default people;
