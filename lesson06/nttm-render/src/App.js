import React, { Component } from 'react'
import NTTM_ProductList from './components/NTTM_ProductList';
import NTTM_ProductAdd from './components/NTTM_ProductAdd';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {title: 'Cabbage', id: 1, status: 1},
        {title: 'Garlic', id: 2, status: 0},
        {title: 'Apple', id: 3, status: 0},
        {title: 'SamSung', id: 4, status: 1},
        {title: 'Nguyễn Thị Trà Mi', id: 2210900041, status: 1},
      ]
    }
  }
  nttmHandleSubmit = (param)=>{
    console.log("App:", param);
    // thêm vào mảng dữ liệu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Nguyễn Thị Trà Mi - Render Data - Event Form</h1>
        <hr/>
        <NTTM_ProductList renderProducts = {this.state.products} />
        <hr/>
        <NTTM_ProductAdd onSubmit = {this.nttmHandleSubmit}/>
      </div>
    )
  }
}
