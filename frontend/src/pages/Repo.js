import React from 'react';
import './Repo.css'
import repoLogo from '../assets/repo.png';

export default function Repo({ repo }) {
  return (
    <li className="repo">
      <div className="repo-shadow">
        <h4 className="repo-name">{repo.name}</h4>
        { repo.language.name && 
          <h4 className="repo-tag"><span className={`dot ${repo.language.color}`}></span>{repo.language.name}</h4>        
        }
      </div>
      <img className="repo-img" src={repoLogo} alt="" />
    </li>
  )
}