
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

function App() {
  const n = 20;
  const[name, setName] = useState("Gabriel")
  
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
      <h3 style={name === "Gabriel" ? {color: "green"} : {color : "purple"}}>Nome - Inline com useState</h3>
    </div>
    
    
  );
}

export default App;
