import react from 'react';

const Order = (props) => {
    const { change, submit, errors } = props;
    const { name, size, toppings, special } = props.values;

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    return (
        <div>
            <h1> Order a pizza now! </h1>
            <div className="form">
                <form id="pizza-form" onSubmit={onSubmit}>
                    <div className="name">
                        <h4>Enter your name</h4>
                    <label id="name-input">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="type your name"
                            onChange={onChange}
                        />
                    </label>
                    </div>
                    <div className="size">
                        <h4>Choose pizza size</h4>
                        <label id="size-dropdown">
                            <select value={size.size} name="size" onChange={onChange}>
                                <option value="">-- Select a size --</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </label>
                    </div>

                    <div className="toppings">
                        <h4>Toppings</h4>
                        <div className="toptop">
                            <label>Pepperoni
                                <input
                                    type="checkbox"
                                    name="top1"
                                    onChange={onChange}
                                    checked={toppings.top1}
                                />
                            </label>
                            <label>Pineapple
                                <input
                                    type="checkbox"
                                    name="top2"
                                    onChange={onChange}
                                    checked={toppings.top2}
                                />
                            </label>
                            <label>Mushrooms
                                <input
                                    type="checkbox"
                                    name="top3"
                                    onchange={onChange}
                                    checked={toppings.top3}
                                />
                            </label>
                            <label>Sausage
                                <input
                                    type="checkbox"
                                    name="top4"
                                    onChange={onChange}
                                    checked={toppings.top4}
                                />
                            </label>
                            
                        </div>

                    </div>
                </form>
            </div>
            
        </div>
    )


}
export default Order ;