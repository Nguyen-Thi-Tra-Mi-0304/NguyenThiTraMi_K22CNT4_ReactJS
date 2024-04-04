// import logo from './logo.svg';
import './App.css';
import Class_NguyenThiTraMi from './components/Class_NguyenThiTraMi';
import Func_JSX_NguyenThiTraMi from './components/Func_JSX_NguyenThiTraMi';

function App() {
  return (
    <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo */}
        <Func_JSX_NguyenThiTraMi />
        <Func_JSX_NguyenThiTraMi fullName = "Nguyen Thi Tra Mi" age = "20"/>

        <Class_NguyenThiTraMi />
        <hr/> 
        <Class_NguyenThiTraMi info = "Hoc ReactJS" time="11"/>
    </section>
  );
}

export default App;
