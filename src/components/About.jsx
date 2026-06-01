import React from 'react'
import './About.css'

function About() {
  return (
    <main>
      <h1>Equipo 5</h1>

      <section>
        <h2>Pablo Ortega Fernández</h2>
        <p>Responsable de la configuración de Cypress, implementación de pruebas BDD y corrección de los tests rotos de la aplicación.</p>
      </section>

      <section>
        <h2>Minerva</h2>
        <p>Responsable del diseño de la interfaz de usuario y maquetación de los componentes principales de la aplicación.</p>
      </section>

      <section>
        <h2>Donovan López</h2>
        <p>Responsable de la integración con la API de precios de carburantes y gestión del estado global de la aplicación.</p>
      </section>

      <section>
        <h2>Eli</h2>
        <p>Responsable del desarrollo del sistema de autenticación de usuarios y gestión de rutas de la aplicación.</p>
      </section>

    </main>
  )
}

export default About