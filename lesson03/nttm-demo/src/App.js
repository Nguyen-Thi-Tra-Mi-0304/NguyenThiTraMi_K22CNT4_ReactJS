import logo from './logo.svg';
import './App.css';
import NTTM_FuncDemo from './components/NTTM_FuncDemo';
import NTTM_ClassComp from './components/NTTM_ClassComp';

function App() {
  // Khai báo biến đối tượng 
  const users = {
    userName: "k22cnt4",
    password: "123456a@",
    fistName: "Nguyễn Thị Trà",
    lastName: "Mi"
  }

  // Khai báo đối tượng hàm 
  function formatName(users) {
    return <h2>Xin chào, {users.fistName} {users.lastName} </h2>
  }
  return (
    <div className="App">
        {/* Biểu thức JSX */}
        <div>
            <p> FullName: {users.fistName} {users.lastName} </p>
            {formatName(users)}
        </div>

        {/* Sử dụng function component */}
        <div>
            <NTTM_FuncDemo />
            {/* Sử dụng Func_Comp có props */}
            <NTTM_FuncDemo userName="NTTM" fullName="Nguyễn Thị Trà Mi" age="20" />
        </div>

        {/* Sử dụng class component */}
        <div>
          {/* Không sử dụng props */}
          <NTTM_ClassComp />
          {/* Sử dụng props */}
          <NTTM_ClassComp company="Fit-NTU-K22CNT4" course="ReactJS" />
          <NTTM_ClassComp company="Fit-NTU-K22CNT5" course="ReactJS 1" />
          <NTTM_ClassComp company="Fit-NTU-K22CNT6" course="ReactJS 2" />
        </div>
    </div>
  );
}

export default App;
