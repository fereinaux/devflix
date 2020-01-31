import React, { useState, useEffect } from 'react';
import { api } from 'services';
import { RepoList } from 'components/Repos/RepoList';
import './RepoContainer.css'

export default function RepoContainer() {
  const reload = false;
  const [repoList, SetRepoList] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      const response = await api.get(`/repos`)
      SetRepoList(response.data);
    }
    loadRepos();
  }, reload)

  return (
    <div>
      {repoList ?
        <div className="repo-container">
          <h2>Repositórios em alta</h2>
          <RepoList repoList={repoList} />
        </div> : ""}
    </div>
  );
}