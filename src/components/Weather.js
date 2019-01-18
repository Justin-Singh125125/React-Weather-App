import React from "react";
//functional component because we are not using state 

const Weather = (props) => {
    return (
        <div className="weather__info">
            {/* if statements that check if the contents are undefined, if not, displays data */}
            {
                props.city && props.country &&
                <p className="weather__key"> Location: <span className="weather__value">{props.city}, {props.country}</span></p>
            }

            {
                props.temperature &&
                <p className="weather__key"> temperature: <span className="weather__value">{props.temperature}</span></p>
            }
            {
                props.humidity &&
                <p className="weather__key"> Humidity: <span className="weather__value">{props.humidity}</span></p>
            }
            {
                props.description &&
                <p className="weather__key"> Conditions: <span className="weather__value">{props.description}</span></p>
            }
            {
                props.error &&
                <p className="weather__key">Please Enter Values</p>
            }
        </div>
    );
}
export default Weather;