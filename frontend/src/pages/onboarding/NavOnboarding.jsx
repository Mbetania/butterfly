import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Login } from './Login'

export const NavOnboarding = ({ client }) => {
return (
    <main className='w-100 h-100 row'>
        <CredentialsNavigation client={client} />
        <section className={`col-8 outlet-onboarding`} >
            falopa
            <Outlet/>
        </section>
    </main>
)
}


const CredentialsNavigation = ({client}) => {
    return(
        <nav className={`d-flex col-4 row pt-5`}>
            <div className='col-2'>
                betttt
            </div>
            <aside className='col-4'>
                beeeeeee
            </aside>
            <NavSteps/>
        </nav>
    )
}

const NavSteps = () => {
    const steps = [
        { message: 'Ingresa tus credenciales', target:'login'},
        { message: 'aca van locaciones', target:'location'},
        { message: 'aca la config de tarifas', target:'taxes'}
    ]

    return(
        <section>
            {steps.map(({target,message}, index) => {
                return(
                    <li key={index}>
                        <NavLink to={target}>
                            {message}    
                        </NavLink>
                    </li>
                )
            })}
        </section>
    )
}