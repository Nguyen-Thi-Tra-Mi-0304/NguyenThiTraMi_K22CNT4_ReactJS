import './App.css';
import {React, useEffect, useState} from 'react'
import axios from 'axios';
import NttmStudentList from './components/NttmStudentList';


function NttmApp() {
  // Sử dụng hàm useState của hook
  const [nttmStudentList, setNttmStudentList] = useState([]);
  // Get data from api 
  const nttmGetStudent = async () => {
    try {
      const response = await axios.get("https://666a977c7013419182cff1a9.mockapi.io/api/nttmv1/nttmStudent");
      setNttmStudentList(response.data);
    }catch (error){
      console.error("Error fetching data", error); 
    }
  }
  //
  useEffect(() => {
    nttmGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h2 className='text-center my-3'>Xử lý chức năng CRUD - Hook - API</h2>
      <hr/>
      <NttmStudentList renderNttmStudentList = {nttmStudentList} />
    </div>
  );
}

export default NttmApp;
