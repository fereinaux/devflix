import React, { useState, useEffect } from 'react';
import { api } from 'services';
import { DevList } from 'components/Devs/DevList';
import './DevContainer.css'

export default function DevContainer() {
  const [devList, SetDevList] = useState([]);
  const reload = false;

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get(`/devs`)
      SetDevList(response.data);
    }
    loadDevs();
  }, reload)

  return (
    <div>
      {devList ?
        <div className="dev-container">
          <h2>Populares no GitHub</h2>
          <DevList devList={devList} />
        </div> : ""}
    </div>
  );
}