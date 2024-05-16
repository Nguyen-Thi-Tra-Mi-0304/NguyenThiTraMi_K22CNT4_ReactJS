import React, { useContext } from 'react'
import { ThemContext } from './NttmUseContext'

export default function NttmUseContext2() {
    const theme = useContext(ThemContext);
  return (
    <div className={theme}>
      <h2>NttmUseContext2</h2>
      <p>
        <b>2210900041</b>
        <b>Nguyễn Thị Trà Mi</b>
        <i>K22CNT4</i>
      </p>
    </div>
  )
}
