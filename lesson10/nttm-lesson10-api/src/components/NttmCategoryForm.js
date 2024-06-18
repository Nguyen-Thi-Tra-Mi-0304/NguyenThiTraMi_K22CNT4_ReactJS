import React, { useState } from 'react'
import axios from '../api/NttmApi';

export default function NttmCategoryForm({onCloseForm, onCategorySubmit}) {
    // state 
    const [nttmCategoryName,setNttmCategoryName] = useState("");
    const [nttmCategoryStatus,setNttmCategoryStatus] = useState(true);  

    const nttmHandleClose = () => {
        onCloseForm(false);
    }

    const nttmHandleSubmit = async (event)=>{
        event.preventDefault();
        let nttmCategory = {
            nttmId:0,
            nttmCategoryName:nttmCategoryName,
            nttmCategoryStatus:nttmCategoryStatus
        }
        console.log("nttmCategory",nttmCategory);
        await axios.post("NttmCategory",nttmCategory)
        onCategorySubmit(nttmCategory);
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
