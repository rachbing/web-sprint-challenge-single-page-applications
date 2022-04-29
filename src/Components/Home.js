import react from 'react';

import { useHistory } from 'react-router-dom'

const Home = (props) => {

    const history = useHistory();

    const routeToOrder = () => {
        history.push("/pizza");
    }

    return (
        <h1> Make a pizza with us! </h1>
    )
}
export default Home;