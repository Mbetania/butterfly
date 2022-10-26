import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
return (
    <section id='onboarding-login'>
        <header className=' mt-2 mt-xxl-5 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='title--title'>Ingresa tus credenciales de FLY </h1>
            <h3 className='title--subtitle'>Conecta tu cuenta de Butterfly con Tiendanube.</h3>
            <h3 className='title--subtitle'>Si no conoces tus credenciales,<Link to=''>contáctate con nosotros.</Link></h3>
        </header>
        <article className='d-flex flex-column mt-3 mt-xxl-5 align-items-center'>
        <form className='d-flex flex-column align-items-center w-50'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </form>
        </article>
    </section>
)
}
