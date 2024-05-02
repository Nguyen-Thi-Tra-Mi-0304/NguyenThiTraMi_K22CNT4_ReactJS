import React, { Component } from 'react'
import NTTM_Form1 from './components/NTTM_Form1'
import NTTM_Form2 from './components/NTTM_Form2'
import NTTM_Form3 from './components/NTTM_Form3'

export default class App extends Component {
nttmSumit = (param)=>{
  console.log("App:",param);
}
  render() {
    return (
      <div>
        <h1>Controlled Component ReactJS Form</h1>
        <NTTM_Form1/>
        <NTTM_Form2/> 
        <hr/>
        <NTTM_Form3 onSubmit={this.nttmSumit} />
      </div>
    )
  }
}
  