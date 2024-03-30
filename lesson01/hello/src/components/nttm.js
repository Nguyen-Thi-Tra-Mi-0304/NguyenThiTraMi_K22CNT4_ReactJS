import React from 'react'

export default function Nttm(props) {
    return (
        <div>
           <h1>Welcome to, ReactJS</h1> 
           <p>HovaTen: {props.hoten}</p>
           <p>MaSV: {props.msv}</p>
           <p>Lop: {props.lop}</p>
           <p>Email: {props.email}</p>
           <p>Phone: {props.phone}</p>
        </div>
    )
}