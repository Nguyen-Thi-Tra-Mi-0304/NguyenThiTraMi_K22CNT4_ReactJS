import React, { Component } from 'react'
import NttmListProduct from './components/NttmListProduct';
import NttmProductAdd from './components/NttmProductAdd';

export default class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      nttm_Products: [
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
          ,  nttm_quantity:10
          , nttm_price:1500
        },
      ]
    }
  }
  nttmHandleSubmit = (param)=>{
    console.log("App:", param);
    // thêm vào mảng dữ liệu products
    let {nttm_Products} = this.state;
    nttm_Products.push(param);
    this.setState({
      nttm_Products:nttm_Products
    })
  }
  render() {
    return (
      <div className='container border mt-5 text-center'>
          <h1>Nguyễn Thị Trà Mi - 2210900041 - K22CNT4</h1>
          <hr/>
          <NttmListProduct nttmRenderProducts = {this.state.nttm_Products} />
          <hr/>
          <NttmProductAdd onSubmit = {this.nttmHandleSubmit} />
      </div>
    )
  }
}
