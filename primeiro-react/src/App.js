import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import BemVindo from './components/BemVindo';

function App() {
  const name = "gabriel"
  return (
    <div className="App">
      <HelloWord></HelloWord>
      <BemVindo nome="gabriel"></BemVindo>
    </div>
  );
}

export default App;
