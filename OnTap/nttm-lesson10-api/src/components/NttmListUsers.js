import React from 'react'

export default function NttmListUsers({renderNttmListUser}) {
    console.log("NttmListUsers:",renderNttmListUser);
    // 2. Hiển thị dữ liệu 
    let nttmElementUser = renderNttmListUser.map((nttmUsers, index) => {
        return(
            <>
            <tr>
                <td>{nttmUsers.id}</td>
                <td>{nttmUsers.UserName}</td>
                <td>{nttmUsers.Password}</td>
                <td>{nttmUsers.Email}</td>
                <td>{nttmUsers.Phone}</td>
                <td>...</td>
            </tr>
            </>
        )
    })
  return (
    <div className='row'>
      <div className='col-md-12'>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>PassWord</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {nttmElementUser}
        </tbody>
      </table>
      </div>
    </div>
  )
}
