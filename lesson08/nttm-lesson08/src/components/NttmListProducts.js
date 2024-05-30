import React from 'react'

export default function NttmListProducts({renderNttmProducts}) {
    console.log("List Product: ", renderNttmProducts);

    let nttmTong = 0; 

    let nttmElementProduct = renderNttmProducts.map((nttmProduct,index)=>{
        nttmTong += nttmProduct.nttm_quantity*nttmProduct.nttm_price; 
        return(
            <>
            <tr key = {index}>
                <td>{index+1}</td>
                <td>{nttmProduct.nttm_productId}</td>
                <td>{nttmProduct.nttm_productName}</td>
                <td>{nttmProduct.nttm_quantity}</td>
                <td>{nttmProduct.nttm_price}</td>
                <td>{nttmProduct.nttm_quantity*nttmProduct.nttm_price}</td>
                <td>
                    <button className='btn btn-success mx-1'><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn btn-danger mx-1'><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
            </>
        )
    })
  return (
    <div>
      <h2>DANH SÁCH SẢN PHẨM</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn Giá</th>
                <th>Thành tiền</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {nttmElementProduct}
        </tbody>
        <tfoot>
            <tr>
                <th colSpan={5} className='text-end'>Tổng cộng</th>
                <th colSpan={2} className='text-start'>
                    {nttmTong}
                </th>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}
