import React from 'react'

export default function NTTM_EventForm2() {
    // Định nghĩa các hàm khi xử lý sự kiện
    const eventHandleClick = (content)=>{
        console.log("====================================");
        console.log(content);
        console.log("====================================");
    }
  return (
    <div className='alert alert-success'>
      <h2>Event Demo - Function Component</h2>
      {/* <button onClick={eventHandleClick("Nguyễn Thị Trà Mi")}>Gọi khi render</button> */}
      <button onClick={()=>eventHandleClick("K22CNT4-ReactJS")}>Gọi khi click</button>
    </div>
  )
}

