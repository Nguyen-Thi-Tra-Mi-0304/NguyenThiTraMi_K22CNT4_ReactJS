import React, {useEffect, useState} from 'react'
import axios from './nttm-api/nttm-2210900041-api'
import NttmListTableName from './nttm-components/NttmListTableName';
import NttmCreateTableName from './nttm-components/NttmCreateTableName';

export default function NttmApp() {
  // Đọc dữ liệu từ api 
  const [nttmListTableName, setnttmListTableName] = useState([])
  const nttmGetTableName = async () => {
    let nttmResp = await axios.get("nttmTableName");
    console.log("App List Table: ", nttmResp.data);
    setnttmListTableName(nttmResp.data);
  }

  useEffect(()=>{
    nttmGetTableName();
  },[])
  // Sự kiện xóa 
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

    // Sự kiện thêm mới 
  // const nttmHandleAdd = ()=>{
  //   nttmGetTableName();
  // }

  // Sự kiệm sửa 
  const nttmHandleEdit = (nttmObjTableName)=>{
    setNttmTableName(nttmObjTableName);
    nttmGetTableName();
  }

  return (
    <div className='container my-3 border'>
      <h1 className='text-center'>Nguyễn Thị Trà Mi - 2210900041- Ôn tập cuối kỳ</h1>
      <hr/>
      <NttmListTableName renderListTableName={nttmListTableName} onNttmDelete = {nttmHandleDelete} onNttmEdit = {nttmHandleEdit}/>
      <hr/>
      <NttmCreateTableName renderNttmTableName = {nttmTableName} onNttmEdit = {nttmHandleEdit} />
    </div>
  )
}

