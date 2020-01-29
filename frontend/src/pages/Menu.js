import React from 'react';
import logo from '../assets/devflix.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Menu.css';

export default function Menu({ dev }) {
  console.log(dev);
  return (
    <div className="header">

      <div className="header-left" >
        <Link to={
          {
            pathname: '/'
          }
        }> <img src={logo} className="logo" alt="logo" /></Link>
        {/* <ul>
          <li >
            <Link to={
              {
                pathname: '/'
              }
            }>Início</Link>
          </li>
          <li>
            <Link to={
              {
                pathname: '/devs'
              }
            }>Devs</Link>
          </li>
          <li>
            <Link to={
              {
                pathname: '/repos'
              }
            }>Repos</Link>
          </li>
        </ul> */}
      </div>
      <div className="header-right">
        {/* <div className="search">
          <FontAwesomeIcon icon={faSearch} />
        </div> */}
        <img src={dev.avatar} alt="" />
      </div>
    </div>
  )
}