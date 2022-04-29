import React from "react";

import { useHistory } from "react-router-dom"

export default function Home() {

    const history = useHistory();

    const routeToOrder = () => {
        history.push("/pizza");
    }

    return (
        <h1>Make a pizza with us!</h1>
    )
}