import React from "react";
import "./Order.css";

export default function Order(props) {

    const { values, errors, submit, change} = props

    const onChange = evt => {
        console.log("evt", evt)
        console.log("evt.target", evt.target)
        console.log("evt.target.value", evt.target.value)
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
        <div>
            <h1> Order a pizza now! </h1>
            <p>{errors.name}</p>
            <div className="form">
            <form id="pizza-form" onSubmit={onSubmit}>
                <div className="name">
                    <h4>Enter your name</h4>
                <label id="name-input">
                    <input 
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
                <label id="size-dropdown">
                    
                     <select value={values.size} name="size" onChange={onChange}>
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
                        name="Pepperoni"
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label>Pineapple
                    <input
                        type="checkbox"
                        name="Pineapple"
                        onChange={onChange}
                        checked={values.pineapple}
                    />
                </label>
                </div>

                <div className="coltwo">
                <label>Extra cheese
                    <input
                        type="checkbox"
                        name="extraCheese"
                        onChange={onChange}
                        checked={values.extraCheese}
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="Sausage"
                        onChange={onChange}
                        checked={values.sausage}
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
                        type="textarea"
                        name="special"
                        placeholder="special instructions"
                        onChange={onChange}
                        value={values.special}
                    />
                </label>
                </div>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}


