import React, { useState } from 'react';
import './Login.css'
import { api } from 'services';
import logo from '../../assets/devflix.svg';
import YoutubeBackground from 'react-youtube-background'

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username
    })

    history.push({
      pathname: `/browse/`,
      state: {
        dev: response.data
      }
    })
  }
  return (
    <YoutubeBackground
      className="login-container"
      videoId="vq2jYFZVMDA">


      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <input
          placeholder="Usuário Git"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </YoutubeBackground>
  );
}
