import React, { useEffect, useState } from 'react'
import axios from '../api/NttmApi';

export default function NttmCategoryForm({onCloseForm, onCategorySubmit, renderNttmCategory}) {
    // state 
    const [nttmId, setNttmId] = useState("");
    const [nttmCategoryName,setNttmCategoryName] = useState("");
    const [nttmCategoryStatus,setNttmCategoryStatus] = useState(true);  

    useEffect(()=>{
      setNttmId(renderNttmCategory.nttmId);
      setNttmCategoryName(renderNttmCategory.nttmCategoryName);
      setNttmCategoryStatus(renderNttmCategory.nttmCategoryStatus);
    });

    const nttmHandleClose = () => {
        onCloseForm(false);
    }

    const nttmHandleSubmit = async (event)=>{
        event.preventDefault();
        if(nttmId === 0){ // thêm
          let nttmCategory = {
            nttmId:0,
            nttmCategoryName:nttmCategoryName,
            nttmCategoryStatus:nttmCategoryStatus
          }
          console.log("nttmCategory",nttmCategory);
          await axios.post("NttmCategory",nttmCategory)
          onCategorySubmit(nttmCategory);
        } else { // sửa
          let nttmCategory = {
            nttmId:nttmId,
            nttmCategoryName:nttmCategoryName,
            nttmCategoryStatus:nttmCategoryStatus
          }
          console.log("nttmCategory",nttmCategory);
          await axios.put("NttmCategory",nttmCategory)
          onCategorySubmit(nttmCategory);
        }     
    }

  return (
    <div>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Name</span>
            <input type="text" className="form-control" placeholder="Category Name" 
            aria-label="Category Name" aria-describedby="basic-addon1" 
            name='nttmCategoryName' value={nttmCategoryName} 
            onChange={(ev)=>setNttmCategoryName(ev.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Status</span>
            <select name='nttmCategoryStatus' value={nttmCategoryStatus} className="form-control" 
            onChange={(ev)=>setNttmCategoryStatus(ev.target.value)}>
                <option value={true}>Hiển Thị</option>
                <option value={false}>Tạm Khóa</option>
            </select>          
        </div>
        <button className='btn btn-success mb-3 m-2' onClick={nttmHandleSubmit}>Ghi lại</button>
        <button className='btn btn-danger mb-3 m-2' onClick={nttmHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
