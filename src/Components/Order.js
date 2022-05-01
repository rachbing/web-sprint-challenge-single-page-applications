import React from "react";
import "./Order.css";

export default function Order(props) {

    const { values, errors, submit, change} = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
        // const name = evt.target.name
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }
    
    return (
        <div >
            <h1> Order a pizza now! </h1>
            <p>{errors.name}</p>
            <div className="form">
            <form id="pizza-form" onSubmit={onSubmit}>
                <div className="name">
                    <h4>Enter your name</h4>
                <label >
                    <input 
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="type your name"
                        onChange={onChange}
                        value={values.name}
                    />
                </label>
                </div>

                <div className="size">
                    <h4>Choose pizza size</h4>
                <label >
                    
                     <select value={values.size} name="size" onChange={onChange} id="size-dropdown">
                     <option value="">-- Select a Size --</option>
                     <option value="small">small</option>
                     <option value="medium">medium</option>
                     <option value="large">large</option>
                   </select>

                </label>
                </div>

                <div className="toppings">
                    <h4>Toppings</h4>
                    <div className="toptop">
                        <div className="colone">
                    <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        onChange={onChange}
                        value={values.pepperoni}
                    />
                </label>
                <label>Pineapple
                    <input
                        type="checkbox"
                        name="pineapple"
                        onChange={onChange}
                        value={values.pineapple}
                    />
                </label>
                </div>

                <div className="coltwo">
                <label>Extra cheese
                    <input
                        type="checkbox"
                        name="extraCheese"
                        onChange={onChange}
                        value={values.extraCheese}
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        onChange={onChange}
                        value={values.sausage}
                    />
                </label>
                </div>
                </div>
                
                </div>
                <div className="special">
                <h4>Special instructions</h4>
                <label id="special-text">
                    <input 
                        className="specialBox"
                        type="text"
                        name="special"
                        placeholder="special instructions"
                        onChange={onChange}
                        value={values.special}
                    />
                </label>
                </div>
                <div className='submit'>
                    <button id="order-button">Add to Order</button>
                </div>
            </form>
            </div>
        </div>
    )
}


