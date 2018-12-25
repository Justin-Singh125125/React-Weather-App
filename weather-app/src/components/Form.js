import React from "react";

//functional component because we are not using state 
const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input name="city" placeholder="City..." />
            <input name="country" placeholder="Country..." />
            <button>Get Weather</button>
        </form>
    );
}

export default Form;


