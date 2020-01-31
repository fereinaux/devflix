import React from 'react';
import YoutubeBackground from 'react-youtube-background'
import './Main.css';
import { Menu } from 'components/Main/Menu';

export default function Main({children}) {
  return (
    <div className="main-container">
      <YoutubeBackground
        className="trailer"
        videoId="dINgx0y4GqM">

        <Menu /> 
        {children}      
      </YoutubeBackground>
    </div>
  );
}