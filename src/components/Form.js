import React, {useState} from 'react'

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
        }
    }

    return (
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
    )
}

export default Form
