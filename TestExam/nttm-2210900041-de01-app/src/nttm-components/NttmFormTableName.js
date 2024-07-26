import axios from '../nttm_apis/nttm-2210900041'
import React, { useEffect, useState } from 'react'

export default function NttmFormTableName({renderNttmTableName, onNttmEdit, onNttmAdd}) {
    const [nttmId, setNttmId] = useState(renderNttmTableName.nttmId)
    const [nttmTbName, setNttmTbName] = useState(renderNttmTableName.nttmTbName)
    const [nttmTbEmail, setNttmTbEmail] = useState(renderNttmTableName.nttmTbEmail)
    const [nttmTbPhone, setNttmTbPhone] = useState(renderNttmTableName.nttmTbPhone)
    const [nttmStatus, setNttmStatus] = useState(renderNttmTableName.nttmStatus)

    useEffect(()=>{
        setNttmId(renderNttmTableName.nttmId)
        setNttmTbName(renderNttmTableName.nttmTbName)
        setNttmTbEmail(renderNttmTableName.nttmTbEmail)
        setNttmTbPhone(renderNttmTableName.nttmTbPhone)
        setNttmStatus(renderNttmTableName.nttmStatus)
    },[renderNttmTableName])

    const nttmHandleSubmit = async (nttmEvent)=>{
        nttmEvent.preventDefault();
        const nttmObjTableName = {
            "nttmTbName": nttmTbName,
            "nttmTbEmail": nttmTbEmail,
            "nttmTbPhone": nttmTbPhone,
            "nttmStatus": nttmStatus,
            "nttmId": nttmId
        }
        console.log(nttmObjTableName);

        // thêm vào dữ liệu trong api
        await axios.post("nttmTableName",nttmObjTableName);
        onNttmAdd();

        // await axios.put("nttmTableName/"+ nttmObjTableName.nttmId,nttmObjTableName);
        // onNttmEdit();
    }

  return (
    <div>
      <h2>Form xử lý dữ liệu thêm mới </h2>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="nttmId">nttmId</span>
            <input type="text" className="form-control" placeholder="nttmId" 
            aria-label="nttmId" aria-describedby="nttmId"
            name='nttmId'
            value={nttmId}
            onChange={(nttmEv)=>setNttmId(nttmEv.target.value)}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="nttmTbName">nttmTbName</span>
            <input type="text" className="form-control" placeholder="nttmTbName" 
            aria-label="nttmTbName" aria-describedby="nttmTbName"
            name='nttmTbName'
            value={nttmTbName}
            onChange={(nttmEv)=>setNttmTbName(nttmEv.target.value)}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="nttmTbEmail">nttmTbEmail</span>
            <input type="text" className="form-control" placeholder="nttmTbEmail" 
            aria-label="nttmTbEmail" aria-describedby="nttmTbEmail"
            name='nttmTbEmail'
            value={nttmTbEmail}
            onChange={(nttmEv)=>setNttmTbEmail(nttmEv.target.value)}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="nttmTbPhone">nttmTbPhone</span>
            <input type="text" className="form-control" placeholder="nttmTbPhone" 
            aria-label="nttmTbPhone" aria-describedby="nttmTbPhone"
            name='nttmTbPhone'
            value={nttmTbPhone}
            onChange={(nttmEv)=>setNttmTbPhone(nttmEv.target.value)}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="nttmStatus">nttmStatus</span>
            <select id = 'nttmStatus' className='form-control'
                name = 'nttmStatus'
                value={nttmStatus}
                onChange={(nttmEv)=>setNttmStatus(nttmEv.target.value)}
            >
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary my-3' name='btnNttmSave' onClick={nttmHandleSubmit}>Nttm: Save</button>
      </form>
    </div>
  )
}
