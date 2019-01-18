import React from "react";

//functional component because we are not using state 

const Titles = () => {
    return (
        <div>
            <h1 className="title-container__title">Weather Finder</h1>
            <p className="title-container__subtitle">Find out temperature, conditions and more...</p>
        </div>
    );
}
export default Titles;