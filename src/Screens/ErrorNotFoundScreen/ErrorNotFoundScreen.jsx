import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorNotFoundScreen() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Página no encontrada</h1>
      <p>La página no existe o ha sido movida</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}
