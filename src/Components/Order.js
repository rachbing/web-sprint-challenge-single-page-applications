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
                        <label id="size=dropdown">
                            <select value={size.size} name="size" onChange={onChange}>
                                <option value="">-- Select a size --</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </label>
                    </div>
                </form>
            </div>
            
        </div>
    )


}
export default Order ;