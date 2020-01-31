import React from 'react';
import { DevContainer } from 'components/Devs/DevContainer';
import { RepoContainer } from 'components/Repos/RepoContainer';

export default function Main() {
  return (
    <div>
      <DevContainer/>
      <RepoContainer/>
    </div>
  );
}