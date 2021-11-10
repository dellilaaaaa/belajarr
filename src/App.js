import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import ButtonProfile from './components/buttonLogin';
import Buah from './components/buah';

function App() {
  return (
    <div className="App">
      <h2>Selama Datang</h2>
      <Nav />
      <ButtonProfile />
      <Buah />
    </div>
  );
}

export default App;
