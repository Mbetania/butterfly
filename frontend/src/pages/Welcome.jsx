import React from 'react'


export const Welcome = ({ client }) => {
return (
    <main id='welcome-container' className='d-flex flex-column p-4 p-xxl-5 justify-content-around align-items-center'>
        <section>
            <h1>Butterfly</h1>
            <ul>
                <li>Ingresa tus credenciales</li>
                <li>Configura tus locaciones</li>
                <li>Configura las tarifas</li>
            </ul>
        </section>
    </main>
)
}
