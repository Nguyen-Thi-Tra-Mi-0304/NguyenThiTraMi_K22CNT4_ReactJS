import React, { Component } from 'react'

export default class NttmListProduct extends Component {
  render() {
    let {nttmRenderProducts} = this.props; 
    console.log("Products:", nttmRenderProducts);

    let nttmElementProduct = nttmRenderProducts.map((item, index)=>{
        return(
            <>
                <tr key = {index} >
                    <td>{item.nttm_productId}</td>
                    <td>{item.nttm_productName}</td>
                    <td>{item.nttm_quantity}</td>
                    <td>{item.nttm_price}</td>
                </tr>
            </>
        )
    })
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {nttmElementProduct}
            </tbody>
        </table>
      </div>
    )
  }
}
