import React, { useState } from "react";
import Home from "./Components/Home";
import Order from "./Components/Order";

import axios from "axios";

import { Route, Link, Switch } from "react-router-dom";

console.log("hello")

const initialFormValues = {
  name: '',
  size: '',
  toppings: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  toppings: false,
  special:''
}

const App = () => {
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        setOrder([ res.data, ...order])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
