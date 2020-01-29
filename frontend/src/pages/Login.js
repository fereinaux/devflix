import React, { useState } from 'react';
import './Login.css'
import logo from '../assets/devflix.svg';

import api from '../services/api';

export default function Login({ history }) {

  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
      e.preventDefault();

      const response = await api.post('/devs', {
          username
      })
      console.log(response);
      history.push({
          pathname: `/home/`,
          state: {
              dev: response.data
          }
      })
  }

  return (
    <div className="main-container">
      <div className="background-img"></div>
      <div className="background-shadow">
        <div className="logo-login">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <h2>Acesse sua conta para começar a assistir ou reinicie a assinatura.</h2>
          <input
            placeholder="Usuário Git"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}