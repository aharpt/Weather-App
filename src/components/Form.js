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

    return (
        <form style={formStyles}>
            <div style={fDivStyles}>
                <label htmlFor="zip">Zip Code: &nbsp;</label>
                <input 
                    id="zip"
                    type="text"
                    value={zipCode}
                    onChange={event => setZipCode(event.target.value)}
                />
            </div>
            <div style={bDivStyles}><button style={buttonStyles} type="submit">Get Weather</button></div>
        </form>
    )
}

export default Form
