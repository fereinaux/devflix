import React from 'react';
import './Dev.css'

// import { Container } from './styles';

export default function Dev({ dev }) {
  const { username, avatar } = dev;
    return (
      <div className="dev-card">
        <div className="shadow"></div>
        <img src={avatar} alt="" />
        <h4>{username}</h4>
      </div>
    );
}
