import React, { Component } from 'react'

export default class NTTM_Form3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName: "Nguyễn Thị Trà Mi",
            age: "20",
            course: "Nttm-HTML5",
            gender: false
        }
    }

    nttmHandleChange = (event)=>{
        let name = event.target.name; 
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    nttmHandleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
        // Chuyển dữ liệu lên App
        this.props.onSubmit(this.state)
    }

  render() {
    return (
      <div>
        <form>
            <div>
                <label>Student Name: </label>
                <input name='studentName' value={this.state.studentName} onChange={this.nttmHandleChange}/>
            </div>
            <div>
                <label>Age: </label>
                <input name='age' value={this.state.age} onChange={this.nttmHandleChange}/>
            </div>
            <div onChange={this.nttmHandleChange}>
                <label>Gender: </label>
                <input type='radio' id='rdNam' name='gender' value={true} defaultChecked={this.state.gender===true} />
                <label htmlFor='rdNam'>Nam</label>
                <input type='radio' id='rdNu'  name='gender' value={false} defaultChecked={this.state.gender===false} />
                <label htmlFor='rdNu'>Nữ</label>
            </div>
            <div>
                <label>Course: </label>
                <select name='course' value={this.state.course} onChange={this.nttmHandleChange}>
                <option value={"Nttm-HTML5"} >Nttm-HTML5</option>
                <option value={"Nttm-CSS3"} >Nttm-CSS3</option>
                <option value={"Nttm-JS"} >Nttm-JS</option>
                <option value={"Nttm-RJ"} >Nttm-ReactJS</option>
          </select>
            </div>

            <button onClick={this.nttmHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
