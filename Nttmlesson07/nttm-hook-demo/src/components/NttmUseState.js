import React, { useState } from 'react'

export default function NttmUseState() {
    const [count, setCount] = useState(10); 
    // Mảng 
    const [list, setList] = useState([1,5])

    // Hàm xử lý sự kiện "Thêm ngẫu nhiên"
    const nttmHandleList = ()=>{
        // sinh ngẫu nhiên một giá trị số
        let num = parseInt(Math.random()*100)
        // Cập nhật lại state: list 
        setList([
            ...list, 
            num
        ])
        // cách khác 
        // let lst = list.push(num);
        // setList(lst);
    }
  return (
    <div>
      <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={nttmHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}
