import logo from './logo.png';
import './App.css';
import Nttm from './components/nttm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Nttm hoten = "Nguyen Thi Tra Mi" msv="2210900041" lop="K22CNT4" email="traminguyen0304@gmail.com" phone="0963225045" />

    </div>
  );
}

export default App;
