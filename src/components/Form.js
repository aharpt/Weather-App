import React, {useState} from 'react';
import axios from 'axios';

function Form() {

    // form styles
    const formStyles = {
        width: '100%',
        textAlign: 'center',
    }

    // div styles
    const fDivStyles = {
        marginBottom: '15px',
    }

    // span
    const spanStyles = {
        display: 'block',
        color: 'red',
    }

    // button div styles
    const bDivStyles = {
        width: '250px',
        height: '30px',
        margin: 'auto',
    }

    // button styles
    const buttonStyles = {
        float: 'right',
    }

    // state
    const [zipCode, setZipCode] = useState("");
    const [data, setData] = useState({});
    const [error, setError] = useState("");

    // API call
    const getWeather = zipCode => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=ab1391038d946894c84bf12f11e666f0`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            setError(error);
        })
    }

    // event handlers
    const submitHandler = event => {
        const formMessage = document.querySelector(".form-message");
        event.preventDefault();
        if (isNaN(zipCode) || zipCode === "00000") {
            formMessage.innerText = `A Zip Code must be a valid number`;
        } else if (zipCode.length !== 5) {
            formMessage.innerText = `A Zip Code must be five numbers long`;
        } else {
            formMessage.innerText =`Form Successfully Submitted`;
            formMessage.style.color = `green`;
            getWeather(zipCode);
        }
    }

    return (
        <>
        <form onSubmit={submitHandler} style={formStyles}>
            <div style={fDivStyles}>
                <label htmlFor="zip">Zip Code: &nbsp;</label>
                <input 
                    id="zip"
                    type="text"
                    value={zipCode}
                    onChange={event => setZipCode(event.target.value)}
                />
                <span style={spanStyles} className="form-message"></span>
            </div>
            <div style={bDivStyles}><button style={buttonStyles} type="submit">Get Weather</button></div>
        </form>
        <section id="weather-info">
            {data !== {} ? 
            <>
            
            <h3>{data.name}</h3>
            {data.main !== undefined ? <p>Current Temp: {data.main.temp}&deg;F</p> : ""}
            {data.weather !== undefined ? <p>Current Weather: {data.weather[0].main} - {data.weather[0].description}</p> : ""}
            </>
            : error
            }
        </section>
        </>
    )
}

export default Form
