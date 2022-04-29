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

  const postNewOrder = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        setOrder([ res.data, ...order])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      top1: formValues.top1,
      top2: formValues.top2,
      top3: formValues.top3,
      top4: formValues.top4,
      special: formValues.special
    }
    postNewOrder(newOrder)
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }



  return (
    <div className="App">
      <nav>
        <div className="navBar">
          <div className="title">
            <h1> BloomTech Eats </h1>
          </div>
          <div className="nav-links">

            <Link to="/"> <button>Home</button></Link>
            <Link to="/pizza"> <button id="order-pizza">Pizza?</button></Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">

          <Order
            values={formValues}
            update={updateForm}
            submit={submitForm}
            change={inputChange}
            errors={formErrors}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      { formErrors && <p className="error">{formErrors}</p>}
    </div>
  );
};
export default App;
