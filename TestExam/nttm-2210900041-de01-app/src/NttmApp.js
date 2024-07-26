import React, { useEffect, useState } from 'react'
import NttmListTableName from './nttm-components/NttmListTableName'
import axios from './nttm_apis/nttm-2210900041'
import NttmFormTableName from './nttm-components/NttmFormTableName'

export default function NttmApp() {

  // Đọc dữ liệu từ api
  const [nttmListTableName, setnttmListTableName] = useState([])
  const nttmGetTableName = async ()=>{
    let nttmResp = await axios.get("nttmTableName");
    console.log("App list: ",nttmResp.data);
    setnttmListTableName(nttmResp.data);
  }

  useEffect(()=>{
    nttmGetTableName();
  },[])

  // Hàm xóa 
  const nttmHandleDelete = async (nttmId)=>{
    let nttmRes = await axios.delete("nttmTableName/"+nttmId);
    nttmGetTableName();
  }

  const nttmObjTableName = {
    "nttmTbName": "Nguyễn Thị Trà Mi",
    "nttmTbEmail": "traminguyen0304@gmail.com",
    "nttmTbPhone": "096225045",
    "nttmStatus": true,
    "nttmId": "2210900041"
  };
  const [nttmTableName, setNttmTableName] = useState(nttmObjTableName);

  const nttmHandleAdd = ()=>{
    nttmGetTableName();
  }

  const nttmHandleEdit = (nttmObjTableName)=>{
    nttmGetTableName();
    setNttmTableName(nttmObjTableName)
  }
  
  return (
    <div className='container border my-3'>
      <h1 className='text-center'>Bài đánh giá hết học phần - Nguyễn Thị Trà Mi: 2210900041</h1>
      <hr />
      <NttmListTableName renderListTableName = {nttmListTableName} onNttmDelete = {nttmHandleDelete} onNttmEdit = {nttmHandleEdit}/>
      <hr/>
      <NttmFormTableName renderNttmTableName = {nttmTableName} onNttmAdd = {nttmHandleAdd}/>
    </div>
  )
}

