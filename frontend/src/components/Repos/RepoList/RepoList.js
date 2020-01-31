import React from 'react';
import { Repo } from 'components/Repos/Repo';
import './RepoList.css'

export default function RepoList({ repoList }) {
  return (
    <ul className="repo-list">
      {
        repoList.map(repo => (
          <li key={repo.name}>
            <Repo repo={repo} />
          </li>
        ))
      }
    </ul>
  );
}