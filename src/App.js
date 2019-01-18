//holds all internal components

//imports the react npm from the json
import React from "react";
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js"


//class is a reserved key word in js
//creating an instance of app
const API_KEY = "cda01a9fb2673b4daa19b55da5e57049";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        //this is an api call
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        //convert to json
        const data = await api_call.json();



        if (city && country) {
            //temp variable to hold kelvin temp so i can convert
            var temp = (data.main.temp);
            //converts kelvin to fahrenheit
            temp = (((temp - 273.15) * (9 / 5)) + 32).toPrecision(2);


            this.setState({
                temperature: temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            })
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please Enter the Value"
            })
        }

    }
    //returns jsx
    render() {
        //you can only return one parent element
        return (
            <div>
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 title-container">
                                <Titles />
                            </div>
                            <div className="col-md-7 form-container">
                                {/* we have access to this function in the form component now */}
                                <Form getWeather={this.getWeather} />
                                <Weather temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    error={this.state.error} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//makes this component available for other file to import
export default App;

