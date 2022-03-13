import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Input from './components/Input';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Newsletter />
        <Input />
      </Main>
    </div>
  );
}

export default App;
