
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 20;
  const[name, setName] = useState("Gabriel")
  const redTitle = true;
  let teste = 12;
  
  return (
    <div className="App">
      {/**CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/**CSS de Componente */}
      <MyComponent/>
      <p>Teste</p>
      {/**Inline CSS */}
      <p style={{color: "magenta", fontSize: "2em"}}> Este elemento foi estilizado de forma INLINE</p>
      {/**INLINE DINÂMICO */}
      <h3 style={n > 10 ? {color: "blue"} : {color : "purple"}}>Inline dinâmico com IF</h3>
      <h3 style={n < 10 ? {color: "blue"} : {color : "purple"}}>Inline dinâmico com IF</h3>
      {/**Inline com useState */}
      <h3 style={name === "Gabriel" ? {color: "green"} : {color : "purple"}}>{name} - Inline com useState</h3>

      {/**CSS inline dinâmico */}
      <h2 style={n > 10 ? ({color: "pink"}) : ({color: "red"})}>CSS dinâmico</h2>

      {/**Classe Dinâmica */}
      <h2 className={redTitle ? ("red-title") : ("title")}>ESTE TÍTULO é de classes dinâmicas</h2>
      <h3 style={teste >=20  ? ({color: "green"}) : ({color:" brown"})}>Testando os conhecimentos!!</h3>

      {/**CSS MODULES - Padrão utilizado*/}
      <Title/>
    </div>
    
    
  );
}

export default App;
