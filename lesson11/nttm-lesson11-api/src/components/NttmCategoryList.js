import React from 'react'

export default function NttmCategoryList({renderNttmCategory, onAddNew, onNttmDelete, onNttmEdit}) {
  console.log("renderNttmCategory:",renderNttmCategory);

  let nttmCategoryElement = renderNttmCategory.map((nttmCategory,index) => {
    return(
      <tr key = {index}>
        <th>{index+1}</th>
        <td>{nttmCategory.nttmId}</td>
        <td>{nttmCategory.nttmCategoryName}</td>
        <td>{nttmCategory.nttmCategoryStatus===true?"Hiển Thị":"Tạm Khóa"}</td>     
        <td>
          <button className='btn btn-danger' onClick={()=>nttmHandleDelete(nttmCategory.nttmId)}>
            Delete
          </button>
          <button className='btn btn-success'  onClick={()=>nttmHandleEdit(nttmCategory)}>
            Edit
          </button>
        </td>  
      </tr>
    )
  })

  const nttmHandleAdd = () => {
    onAddNew (true);
  }

  // Hàm sử lý sự kiện Xóa
  const nttmHandleDelete = (nttmId)=>{
    if(window.confirm('Bạn có thực sự muốn xóa Category có mã ['+ nttmId + '] không?')) {
      console.log("Delete: ", nttmId);
      onNttmDelete(nttmId)
    } else {

    }
  }

  // Xự kiện cho nút sửa 
  const nttmHandleEdit = (nttmCategory)=>{
    onNttmEdit(nttmCategory);
  }

  return (
    <div className='container m-2'>
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>Mã loại</th>
                <th>Tên loại</th>
                <th>Trạng thái</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
          {nttmCategoryElement}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={nttmHandleAdd}>Thêm mới</button>
    </div>
  )
}
