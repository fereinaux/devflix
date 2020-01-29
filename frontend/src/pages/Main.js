import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Dev from './Dev';
import Repo from './Repo';
import api from '../services/api';
import YoutubeBackground from 'react-youtube-background';

import './Main.css';

export default function Main(props) {
    const [devs, setDevs] = useState([]);
    const [repos, setRepos] = useState([]);
    const [devLogado, setDevLogado] = useState(props.location.state.dev);
    useEffect(() => {
        async function loadRepos() {
            const response = await api.get(`/repos`)
            setRepos(response.data);            
        }

        async function loadDevs() {
            const response = await api.get(`/devs`)
            setDevs(response.data);
        }
        loadDevs();
        loadRepos();
    }, [devLogado._id])

    return (
        <div className="main-container">
            <YoutubeBackground className="trailer" videoId='lqgM8ZdAqKo'>
                <Menu dev={devLogado}></Menu>
                {devs.length > 0 ?
                    <div className="content-git">
                        <h2>Populares no GitHub</h2>
                        <ul className="itens">
                            {
                                devs.map(dev => (
                                    <Dev key={dev._id} dev={dev} />
                                ))
                            }
                        </ul>
                    </div>
                    : ""
                }
                {repos.length > 0 ?
                    <div className="content-git">
                        <h2>Repositórios em Alta</h2>
                        <ul className="itens">
                            {
                                repos.map(repo => (
                                    <Repo key={repo.name} repo={repo} />
                                ))
                            }
                        </ul>
                    </div>
                    : ""}
            </YoutubeBackground>
        </div >
    )
};
