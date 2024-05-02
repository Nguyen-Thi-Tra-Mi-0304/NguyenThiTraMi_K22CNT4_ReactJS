import React, { Component } from 'react'

export default class NTTM_Form2 extends Component {
  // 1. 
  constructor(props){
    super(props);
    this.state = {
      course: "Nttm-HTML5"
    }
  }
  // 3. Hàm sử lý sự kiện
  nttmHandleChange = (event)=>{
    // Cập nhật state
    this.setState({
      course:event.target.value
    })
  }
  // 4. 
  nttmHandleSubmit = (event)=>{
    event.preventDefault();
    alert(this.state.course);
  }
  render() {
    // 2.
    return (
      <div>
        <form onSubmit={this.nttmHandleSubmit}>
          <label>Course</label>
          <select value={this.state.course}
            onChange={this.nttmHandleChange}>
            <option value={"Nttm-HTML5"} >Nttm-HTML5</option>
            <option value={"Nttm-CSS3"} >Nttm-CSS3</option>
            <option value={"Nttm-JS"} >Nttm-JS</option>
            <option value={"Nttm-RJ"} >Nttm-ReactJS</option>
          </select>
          <input type='submit' value={"Submit"}/>
        </form>
      </div>
    )
  }
}

