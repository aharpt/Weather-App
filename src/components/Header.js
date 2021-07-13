import React from 'react'

function Header() {

    const hSectionStyles = {
        width: '100%',
        textAlign: 'center',
        marginBottom: '25px',
    }

    return (
        <section style={hSectionStyles}>
            <h3>Weather App</h3>
        </section>
    )
}

export default Header
