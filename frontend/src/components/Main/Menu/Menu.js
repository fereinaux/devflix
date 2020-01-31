import React, { Component } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';
import logo from '../../../assets/devflix.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link to={
          {
            pathname: '/'
          }
        }>
          <img src={logo} alt="" />
        </Link>
        <ul className="menu-list">
        <li>
            <Link to={
              {
                pathname: '/browse'
              }
            }>
              Início
           </Link>
          </li>
          <li>
            <Link to={
              {
                pathname: '/browse/devs'
              }
            }>
              Devs
           </Link>
          </li>
          <li>
            <Link to={
              {
                pathname: '/browse/repos'
              }
            }>
              Repos
           </Link>
          </li>
        </ul>
      </div>
    );
  }
}