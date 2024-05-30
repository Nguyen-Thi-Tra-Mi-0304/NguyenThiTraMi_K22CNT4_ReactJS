import './App.css';
import {React, useState} from 'react'
import NttmListProducts from './components/NttmListProducts';
import NttmProductAddOrEdit from './components/NttmProductAddOrEdit';

function NttmApp() {
  // mock data 
  const nttm_Products = [
    {
        nttm_productId:"2210900041"      
       ,nttm_productName:"Nguyễn Thị Trà Mi"      
       ,nttm_quantity:15       
       ,nttm_price:1000
    },
    {
          nttm_productId:"P002"
        , nttm_productName:"IPhone 12"
        , nttm_quantity:20
        , nttm_price:1250
    },
    {
        nttm_productId:"P003"
        , nttm_productName:"IPhone 13"
        , nttm_quantity:10
        , nttm_price:1500
    },
]
// Sử dụng hàm useState của hook 
  const [nttmListProduct, setNttmListProduct] = useState(nttm_Products)

  const nttmHandleSubmit = (nttmProduct)=>{
    console.log("AddOrEdit",nttmProduct);
    // Thêm vào nttmListProduct 
    setNttmListProduct((nttmprev) =>{
      return[
        ...nttmprev, 
        nttmProduct
      ]
    })
  }

  return (
    <div className="container border mt-5 p-3">
      <h2 className='text-center'>Xử lý các chức năng CRUD - Hook</h2>
      <hr/>
      <NttmListProducts renderNttmProducts = {nttmListProduct}/>
      <NttmProductAddOrEdit nttmOnSubmit={nttmHandleSubmit} />
    </div>
  );
}

export default NttmApp;
