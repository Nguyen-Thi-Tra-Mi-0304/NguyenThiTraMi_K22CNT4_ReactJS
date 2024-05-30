import React, { useState } from 'react'

export default function NttmProductAddOrEdit({nttmOnSubmit}) {
    const [nttm_productId, setNttm_productId] = useState('');
    const [nttm_productName, setNttm_productName] = useState('');
    const [nttm_quantity, setNttm_quantity] = useState(0);
    const [nttm_price, setNttm_price] = useState(0);

    const nttmHandleSubmit = (nttmEven)=>{
        nttmEven.preventDefault();
        let nttmProduct = {
            nttm_productId:nttm_productId,
            nttm_productName:nttm_productName,
            nttm_quantity:nttm_quantity,
            nttm_price:nttm_price,
        }
        nttmOnSubmit(nttmProduct)
    }

  return (
    <div className='col-md-6'>
      <h2>Thêm mới sản phẩm / Sửa đổi</h2>
      <hr/>
      <form>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Mã sản phẩm</span>
            <input type="text" className="form-control" placeholder="Mã sản phẩm" 
            name='nttm_productId' value={nttm_productId}
            onChange={(ev)=>setNttm_productId(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Tên sản phẩm</span>
            <input type="text" className="form-control" placeholder="Tên sản phẩm" 
            name='nttm_productName' value={nttm_productName}
            onChange={(ev)=>setNttm_productName(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">Số lượng sản phẩm</span>
            <input type="number" className="form-control" placeholder="Số lượng sản phẩm" 
            name='nttm_quantity' value={nttm_quantity}
            onChange={(ev)=>setNttm_quantity(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon4">Đơn giá</span>
            <input type="number" className="form-control" placeholder="Đơn giá" 
            name='nttm_price' value={nttm_price}
            onChange={(ev)=>setNttm_price(ev.target.value)}
            aria-describedby="basic-addon1"/>
        </div>
        <button className='btn btn-primary' name='nttmBtnAction' onClick={nttmHandleSubmit}>
            Thêm mới</button>
      </form>
    </div>
  )
}
