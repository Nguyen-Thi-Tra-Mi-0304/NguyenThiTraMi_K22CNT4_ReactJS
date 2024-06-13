import React from 'react'

export default function NttmStudentList({renderNttmStudentList}) {
    console.log("Data", renderNttmStudentList);
    let nttmElement = renderNttmStudentList.map((nttmStudent, index) => {
        return (
            <tr key = {index}>
                <th scope="row">{index+1}</th>
                <td>{nttmStudent.nttmid}</td>
                <td>{nttmStudent.nttmName}</td>
                <td>{nttmStudent.nttmAge}</td>
                <td>{nttmStudent.nttmPhone}</td>
                <td>{nttmStudent.nttmEmail}</td>
                <td>{nttmStudent.nttmStatus}</td>
                <td>
                    Edit / Delete
                </td>
            </tr>
        )
    });

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã sinh viên</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Tuổi</th>
                    <th scope="col">Điện Thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {nttmElement}
            </tbody>
        </table>
    </div>
  )
}
