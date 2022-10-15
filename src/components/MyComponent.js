import React from 'react'
import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
      <h1>CSS de Componente</h1>
      <p>Este é um parágrafo global</p>
      {/**Abaixo mostra a criação de classes para o CSS não VAZAR */}
      <p className='par-comp'>Este é um parágrao com CLASSES</p>
    </div>
  )
}

export default MyComponent
