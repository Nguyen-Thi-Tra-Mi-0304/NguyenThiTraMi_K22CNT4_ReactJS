import React from 'react'

export default function NttmListTableName({renderListTableName, onNttmDelete, onNttmEdit}) {
    console.log("List:",renderListTableName);
    // Hiển thị dữ liệu 
    const nttmElementTableName = renderListTableName.map((nttmItem,nttmIndex)=>{
      return(
        <tr key = {nttmIndex}>
          <td>{nttmItem.nttmId}</td>
          <td>{nttmItem.nttmTbName}</td>
          <td>{nttmItem.nttmTbEmail}</td>
          <td>{nttmItem.nttmTbPhone}</td>
          <td>{(nttmItem.nttmStatus===true || nttmItem.nttmStatus==="true")?"Active":"Non-Active"}</td>
          <td>
            <button className='btn btn-success m-2'
            onClick={()=>{nttmHandleEdit(nttmItem)}}
            >nttm-edit</button>
            <button className='btn btn-danger '
            onClick={()=>nttmHandleDelete(nttmItem.nttmId)}           
            >nttm-delete</button>
          </td>
        </tr>
      )
    })
    // Sự kiện xóa 
    const nttmHandleDelete = (nttmId) => {
      if (window.confirm('Bạn có muốn xóa dữ liệu có nttmId = '+ nttmId)) {
        onNttmDelete(nttmId);
      }
    }
    // Sự kiện sửa
    const nttmHandleEdit = (nttmObjTableName)=>{
      onNttmEdit(nttmObjTableName)
    }

  return (
    <div>
      <h2>Danh sách thông tin...</h2>
      <hr/>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>nttmId</th>
                <th>nttmTbName</th>
                <th>nttmTbEmail</th>
                <th>nttmTbPhone</th>
                <th>nttmStatus</th>
                <th>nttm: Chức năng</th>
            </tr>
        </thead>
       <tbody>
        {nttmElementTableName}
        </tbody> 
      </table>
    </div>
  )
}
