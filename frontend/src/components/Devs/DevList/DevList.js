import React from 'react';
import { Dev } from 'components/Devs/Dev';
import './DevList.css'

export default function DevList({ devList }) {
  return (
    <ul className="dev-list">
      {
        devList.map(dev => (
          <li key={dev.username} >
            <Dev dev={dev} />
          </li>
        ))
      }
    </ul>
  );
}