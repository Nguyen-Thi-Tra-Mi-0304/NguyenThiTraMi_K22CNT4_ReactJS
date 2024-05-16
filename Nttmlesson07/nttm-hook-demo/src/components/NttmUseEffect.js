import React, { useEffect, useState } from 'react'

export default function NttmUseEffect() {
    // state: count 
    const [count, setCount] = useState(0);

    // Hàm xử lý sự kiện "Click here"
    const nttmHandleClick = ()=>{
        setCount(prev => prev + 1);
    }

    // Sử dụng hàm useEffect để cập nhật lại title: có một tham số
    useEffect(()=>{
        document.title = 'Nguyễn Thị Trà Mi: You clicked {count} times';
        console.log('You clicked {count} times');
    });
    // useEffect: tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log('Chạy lần đầu tiên - Một lần');
    },[])

    // [deps]
    useEffect(()=>{
        console.log('useEffect count click:',count);
    },[count])
  return (
    <div>
      <h2>Demo - useEffect: You clicked {count} times </h2>
      <button onClick={nttmHandleClick}>
            Click here
      </button>
    </div>
  )
}
