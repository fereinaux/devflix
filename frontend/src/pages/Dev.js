import React from 'react';
import './Dev.css'

export default function Dev({dev}) {
  return (
    <li className="dev">
      <div className="dev-shadow">
        <h4 className="dev-username">{dev.username}</h4>
      </div>
      <img className="dev-img" src={dev.avatar} alt="" />
    </li>
  )
}