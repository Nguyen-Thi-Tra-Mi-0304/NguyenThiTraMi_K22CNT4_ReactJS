import React, { Component } from 'react'

export default class Class_NguyenThiTraMi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Nguyen Thi Tra Mi",
            class: "K22CNT4"
        }
    }
    users = {
        name: "Nguyen Thi Tra Mi",
        age: 20 
    }
    // Xu ly sk 
    handleChange = (event)=> {
        this.setState({
            fullName: "Tra Mi",
        })
    }
  render() {
    return (
      <div>
            <h2>Class Component Demo</h2>
            {this.users.name} - {this.users.age}

            <hr/>
            <h3>Info: {this.props.info}</h3>
            <h3>Time: {this.props.time}</h3>
            <hr/>
            <h3>State: 
                Fullname: {this.state.fullName} - 
                Class: {this.state.class}
            </h3>
            <button onClick={this.handleChange}>Change Name</button>
      </div>
    )
  }
}
