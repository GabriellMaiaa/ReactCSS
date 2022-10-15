
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/**CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/**CSS de Componente */}
      <MyComponent/>
      <p>Teste</p>
    </div>
  );
}

export default App;
