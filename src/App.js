import './App.css';
import logo from './assets/image.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>Logo Empresa</p>

        <ul className="nav">
          <li>Início</li>
          <li>Serviços</li>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Já tem uma conta?</li>
        </ul>
      </header>

      <main className="main">
        <div>
          <div className="newsletterContainer">
            <h1>
              <span>Inscreva-se agora</span> na Newsletter
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="input">
            <input type="text" placeholder="Nome"></input>
            <input type="email" placeholder="Email"></input>
            <button onClick={() => {}}>Enviar</button>
          </div>
        </div>

        <div>
          <img src={logo} alt="girl"></img>
        </div>
      </main>
    </div>
  );
}

export default App;
