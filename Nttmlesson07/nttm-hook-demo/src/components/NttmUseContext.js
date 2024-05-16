import React, { createContext, useContext, useState } from 'react'
import NttmUseContext1 from './NttmUseContext1';

export const ThemContext = createContext(); // Tạo ngữ cảnh để chia sẻ 

export default function NttmUseContext() {
    // state
    const [theme, setTheme] = useState('red');

    // Hàm thay đổi theme 
    const nttmHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemContext.Provider value = {theme} >
    <div className='alert'>
      <h2>Demo useContext</h2>
      <NttmUseContext1 />
      <button onClick={nttmHandleChange}>Change Color</button>
    </div>
    </ThemContext.Provider>
  )
}
