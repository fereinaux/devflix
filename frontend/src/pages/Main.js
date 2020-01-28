import React from 'react';
import Menu from './Menu';
import Dev from './Dev';
import Repo from './Repo';

import { Link } from 'react-router-dom';
import YoutubeBackground from 'react-youtube-background';

import './Main.css';

export default function Main() {
    return (
        <div className="main-container">
            <YoutubeBackground className="trailer" videoId='lqgM8ZdAqKo'>
                <Menu menu="Início"></Menu>
                <div className="content-git">
                    <h2>Populares no GitHub</h2>
                    <div className="itens">
                        <Dev dev={
                            {
                                username: 'fereinaux',
                                avatar: 'https://avatars1.githubusercontent.com/u/40035984?s=460&v=4'
                            }
                        }></Dev>
                        <Dev dev={
                            {
                                username: 'filipedeschamps',
                                avatar: 'https://avatars3.githubusercontent.com/u/4248081?s=460&v=4'
                            }
                        }></Dev>
                    </div>
                </div>
                <div className="content-git">
                    <h2>Repositórios em Alta</h2>
                    <div className="itens">
                        <Repo repo={
                            {
                                name: 'Tindev',
                                language: {
                                    name: 'Javascript',
                                    color: 'blue'
                                }
                            }
                        }></Repo>
                        <Repo repo={
                            {
                                name: 'SeminariosIECB',
                                language: {
                                    name: 'C#',
                                    color: 'pink'
                                }
                            }
                        }></Repo>
                    </div>
                </div>
            </YoutubeBackground>
        </div >
    )
};
