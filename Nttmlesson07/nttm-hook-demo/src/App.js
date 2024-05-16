import React from 'react'
import NttmUseState from './components/NttmUseState'
import NttmUseEffect from './components/NttmUseEffect'
import NttmUseContext from './components/NttmUseContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-5'>
      <h1 className='text-center'>Nguyễn Thị Trà Mi - Hook</h1>
      <hr/>
      <NttmUseState />
      <hr/>
      <NttmUseEffect />
      <hr/>
      <NttmUseContext/>
    </div>
  )
}
