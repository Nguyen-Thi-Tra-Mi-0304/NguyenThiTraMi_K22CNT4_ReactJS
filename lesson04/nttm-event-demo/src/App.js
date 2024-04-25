import React, { Component } from 'react'
import NTTM_EventForm1 from './components/NTTM_EventForm1'
import NTTM_EventForm2 from './components/NTTM_EventForm2'
import NTTM_EventForm3 from './components/NTTM_EventForm3'
import NTTM_EventForm4 from './components/NTTM_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div  className='container'>
          <h1>Event Form Demo</h1>
          <NTTM_EventForm1/>
          <NTTM_EventForm2/>
          <NTTM_EventForm3/>
          <NTTM_EventForm4 name="Nguyễn Thị Trà Mi" />
      </div>
    )
  }
}
