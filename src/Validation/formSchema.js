import * as yup from 'yup';

const orderSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["small", "medium", "large"], "please choose a pizza size"),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    sausage: yup.boolean(),
    special: yup
        .string()
        .trim()
    
})
export default orderSchema;