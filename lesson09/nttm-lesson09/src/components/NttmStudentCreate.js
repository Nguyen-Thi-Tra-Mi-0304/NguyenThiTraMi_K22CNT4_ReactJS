import React, {useState} from 'react'
import axios from "axios";


export default function NttmStudentCreate({setNttmStudentList}) {
  const [nttmid, setNttmid] = useState();
  const [nttmName, setNttmName] = useState();
  const [nttmAge, setNttmAge] = useState();
  const [nttmPhone, setNttmPhone] = useState();
  const [nttmEmail, setNttmEmail] = useState();
  const [nttmStatus, setNttmStatus] = useState();

  const nttmHandleSubmit = async (nttmEvevt) => {
    nttmEvevt.preventDefault();
    let nttmData = {
      nttmid: nttmid,
      nttmName: nttmName,
      nttmAge: nttmAge,
      nttmPhone: nttmPhone,
      nttmEmail: nttmEmail,
      nttmStatus: nttmStatus,
    }
  
    try {
      const response = await axios.post(
        "https://666a977c7013419182cff1a9.mockapi.io/api/nttmv1/nttmStudent",
        nttmData
      );
      setNttmStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }

  };


  return (
    <div>
      <h2>Thêm mới sinh viên</h2>
      <hr/>
      <form>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Mã sinh viên</span>
            <input type="text" className="form-control" placeholder="Mã sinh viên" 
            name='nttmid' value={nttmid}
            onChange={(ev)=>setNttmid(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Tên sinh viên</span>
            <input type="text" className="form-control" placeholder="Tên sinh viên" 
            name='nttmName' value={nttmName}
            onChange={(ev)=>setNttmName(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">Tuổi</span>
            <input type="number" className="form-control" placeholder="Tuổi" 
            name='nttmAge' value={nttmAge}
            onChange={(ev)=>setNttmAge(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon4">Điện thoại</span>
            <input type="number" className="form-control" placeholder="Điện thoại" 
            name='nttmPhone' value={nttmPhone}
            onChange={(ev)=>setNttmPhone(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon4">Email</span>
            <input type="text" className="form-control" placeholder="Email" 
            name='nttmEmail' value={nttmEmail}
            onChange={(ev)=>setNttmEmail(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Trạng thái
          </span>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(ev) => setNttmStatus(ev.target.value)}
          >
            <option selected>Chọn trạng thái</option>
            <option value="True">Hoạt động</option>
            <option value="False">Không hoạt động</option>
          </select>
        </div>
        <button className='btn btn-primary' name='nttmBtnAction' onClick={nttmHandleSubmit}>
            Thêm mới</button>
      </form>
    </div>
  )
}
