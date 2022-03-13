import logo from '../assets/image.svg';

import Input from './Input';
import Newsletter from './Newsletter';

function Main() {
  return (
    <main className="main">
      <div>
        <Newsletter />
        <Input />
      </div>

      <div>
        <img src={logo} alt="girl"></img>
      </div>
    </main>
  );
}

export default Main;
