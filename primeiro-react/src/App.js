import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import BemVindo from './components/BemVindo';
import Pessoa from './components/Pessoa';

function App() {
  const name = "gabriel"
  return (
    <div className="App">
      <Pessoa nome="gabriel" idade="17" peso="56kg"></Pessoa>
    </div>
  );
}

export default App;
