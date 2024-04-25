import React, { Component } from 'react'
// xử lý sự kiện với props , state

export default class NTTM_EventForm3 extends Component {
    constructor(props){
        super(props);
        // Tạo đối tượng dữ liệu thông qua state
        this.state = {
            name: "Nguyễn Thị Trà Mi",
            job: "Đại học Nguyễn Trãi"
        }
    }
    // Hàm xử lý sự kiện 
    handleChangeName = (event)=>{
        this.setState({
            name: "K22CNT4-ReactJS"
        })
    }
    handleChangeJob = ()=>{
        this.setState({
            job: "Công nghệ thông tin"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu: {this.state.name} - {this.state.job} </p>
        <button onClick={this.handleChangeName}>Thay đổi name</button>
        <button onClick={this.handleChangeJob}>Thay đổi job</button>
      </div>
    )
  }
}
