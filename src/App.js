import React, { useState } from "react";
import Home from "./Components/Home";
import Order from "./Components/Order";

import axios from "axios";

import { Route, Link, Switch } from "react-router-dom";
import "./App.css"


const initialFormValues = {
  name:'',
  size:'',
  toppings:'',
  special:''
}

const App = () => {
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState("");
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      pineapple: formValues.pineapple,
      extraCheese: formValues.extraCheese,
      sausage: formValues.sausage,
      special: formValues.special
    }
    // if (!newOrder.name) {
    //   setFormError("Please enter your name")
    //   setFormValues(initialFormValues);
    //   return;
    // }
    // if(newOrder.name.length < 2) {
    //   setFormError("name must be at least 2 characters");
    //   setFormValues(initialFormValues);
    //   return;
    // }
    postNewOrder(newOrder);
  }


  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }


  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        console.log(res)
          setOrder([res, ...order]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
  return (
    <div className="App">
      <nav>
      
      <div className="navBar">
        <div className="title">
          <h1>Lambda Eats</h1>
        </div>
        <div className="nav-links">
        
        <Link to="/"> <button>Home</button> </Link>
        <Link to="/pizza"> <button id="order-pizza">Pizza?</button></Link>  
        </div>
      </div>
        {/* <Link to="/">Home</Link>
        <Link to="/pizza">pizza?</Link>" */}
        
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