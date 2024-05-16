import React, { Component } from 'react'

export default class NttmProductAdd extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            nttm_productId: 0, 
            nttm_productName: '',
            nttm_quantity: 0, 
            nttm_price: 0
        }
    }
    nttmHandleChange = (event)=>{
        let name = event.target.name; 
        let value = event.target.value; 
        this.setState({
            [name]:value
        })
    }
    // submit form
    nttmHandleSubmit = (ev)=>{
        ev.preventDefault();

        this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                ID
            </span>
            <input
                type="text"
                className="form-control"
                name='nttm_productId'
                value={this.state.nttm_productId}
                onChange={this.nttmHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
               Name
            </span>
            <input
                type="text"
                className="form-control"
                name='nttm_productName'
                value={this.state.nttm_productName}
                onChange={this.nttmHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
                Quantity
            </span>
            <input
                type="text"
                className="form-control"
                name='nttm_quantity'
                value={this.state.nttm_quantity}
                onChange={this.nttmHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
                Price
            </span>
            <input
                type="text"
                className="form-control"
                name='nttm_price'
                value={this.state.nttm_price}
                onChange={this.nttmHandleChange}
            />
        </div>
        <button className='btn btn-success' onClick={this.nttmHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    )
  }
}
