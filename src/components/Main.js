import logo from '../assets/image.svg';

function Main(props) {
  return (
    <main className="main">
      <div>{props.children}</div>

      <div>
        <img src={logo} alt="girl"></img>
      </div>
    </main>
  );
}

export default Main;
