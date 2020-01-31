import React from 'react';
import './Repo.css'
import repoLogo from '../../../assets/repo.png';

export default function Repo({ repo }) {
  const { name, language } = repo;
  return (
    <div className="repo-card">
      <div className="shadow"></div>
      <img src={repoLogo} alt="" />
      <h4>{name}</h4>
      {language.name &&
        <strong><span className={`dot ${language.color}`}></span>{language.name}</strong>
      }
    </div>
  );
}
