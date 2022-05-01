import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import Order from "./Components/Order";

import axios from "axios";
import schema from "./Validation/formSchema";
import * as yup from 'yup';


import { Route, Link, Switch } from "react-router-dom";
import "./App.css"


const initialFormValues = {
  // text input
  name:'',
  //dropdown
  size:'',
  // checkboxes
  pepperoni: false,
  pineapple: false,
  extraCheese: false,
  sausage: false,
  //text input
  special:''
}

const initialFormErrors = {
  name: '',
  special: '',
}



const App = () => {
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  
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

  useEffect(()=>{
    console.log(order)
  },[])


  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        console.log(res)
          setOrder([...order, res.data]);
          console.log("ORDER", order)
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});

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
            change={handleChange}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
       
      </Switch>
      {/* { formErrors && <p className="error">{formErrors}</p>} */}
    </div>
  );
};
export default App;