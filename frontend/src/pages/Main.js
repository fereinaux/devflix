import React from 'react';
import logo from '../assets/devflix.svg';
import repo from '../assets/repo.png';
import { Link } from 'react-router-dom';
import YoutubeBackground from 'react-youtube-background';
import './Main.css';

export default function Main() {
    return (
        <div className="main-container">
            <YoutubeBackground className="trailer" videoId='lqgM8ZdAqKo'>
                <div className="header">
                    <img src={logo} className="logo" alt="logo" />
                    <h4>
                        <Link to={{
                            pathname: '/'
                        }}>
                            Início
                        </Link>
                    </h4>
                    <h4>
                        <Link to={{
                            pathname: '/devs'
                        }}>
                            Devs
                         </Link>
                    </h4>
                    <h4>
                        <Link to={{
                            pathname: '/repos'
                        }}>
                            Repositórios
                     </Link>
                    </h4>

                </div>
                <div className="content-git">
                    <h2>Populares no GitHub</h2>
                    <div className="git-itens">
                        <div className="item">
                            <div className="dev-shadow">
                                <h4 className="dev-username">fereinaux</h4>
                            </div>
                            <img className="item-img" src="https://avatars2.githubusercontent.com/u/40035984?s=400&u=139e58cb09fa69501e10c056477df008e88bc972&v=4" alt="" />
                        </div>
                        <div className="item">
                            <div className="dev-shadow">
                                <h4 className="dev-username">filipedeschamps</h4>
                            </div>
                            <img className="item-img" src="https://avatars3.githubusercontent.com/u/4248081?s=460&v=4" alt="" />
                        </div>
                    </div>
                </div>
                <div className="content-git">
                    <h2>Repositórios em Alta</h2>
                    <div className="git-itens">
                        <div className="item">
                            <div className="repo-shadow">
                                <h4 className="repo-name">XSpotify</h4>
                                <h4 className="repo-tag"><span class="dot"></span>Javascript</h4>
                            </div>
                            <img className="repo-img" src={repo} alt="" />
                        </div>
                        <div className="item">
                            <div className="repo-shadow">
                                <h4 className="repo-name">SecLists</h4>
                                <h4 className="repo-tag"><span class="dot"></span>C#</h4>
                            </div>
                            <img className="repo-img" src={repo} alt="" />
                        </div>
                    </div>
                </div>
            </YoutubeBackground>
        </div >
    )
};
