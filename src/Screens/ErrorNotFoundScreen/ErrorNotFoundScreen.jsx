import React from 'react'
import { Link } from 'react-router'

export default function ErrorNotFoundScreen() {
  return (
    <div>
        <h1>Pagina no encontrada</h1>
        <p>La pagina no existe o ha sido movida</p>
        <link to="/">Volver al inicio</link>   
    </div>
  )
}
