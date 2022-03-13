import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <span>Logo Empresa</span>
      </div>

      <div className="nav">
        <ul>
          <li>Início</li>
          <li>Serviços</li>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Já tem uma conta?</li>
        </ul>
      </div>

      <main className="main">
        <h1>Inscreva-se agora na Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="input">
          <input type="text"></input>
          <input type="email"></input>
          <button onClick="()=>{}">Enviar</button>
        </div>
      </main>
    </div>
  );
}

export default App;
