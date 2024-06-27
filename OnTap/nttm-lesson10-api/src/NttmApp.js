import './App.css';
import NttmListUsers from './components/NttmListUsers';
import axios from './api/nttmApi';
import { useEffect, useState } from 'react';

function NttmApp() {

  const[nttmListUsers, setNttmListUsers] = useState([]);

  // 1. đọc dữ liệu từ api 
  const nttmGetAllUsers = async () => {
    const nttmResponse = await axios.get("nttmUsers");
    console.log("Api Data: ", nttmResponse.data);
    setNttmListUsers(nttmResponse.data);
  }

  useEffect(()=>{
    nttmGetAllUsers();
    console.log("State Data: ", nttmListUsers);
  },[])

  return (
    <div className="container border my-3">
      <h1 className='text-center'>Làm việc với mockAPi</h1>
      <hr/>
      <NttmListUsers renderNttmListUser={nttmListUsers}/>
    </div>
  );
}

export default NttmApp;
