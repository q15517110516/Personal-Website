import React, { Component } from 'react';
import './Home.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'antd';

import img1 from './Images/01.png';
import img2 from './Images/02.png';
import img3 from './Images/03.png';
import img4 from './Images/04.png';
import Dashboard from './Images/Dashboard.jpg';
import Template from './Images/Template.jpg';
import Background from './Images/Background.webm';



export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-background">
                    <video autoPlay loop muted height={500} width={1000} poster={img1}>
                        <source src={Background} type="video/mp4"/>
                        Your browser does not support the video tag.

                    </video>
                </div>
                <div className="home-content">
                                
                    {/* Information */}
                    <div className="home-content-1">
                        <img className="img1" src={img1} width={100} height={100} alt="01"/>
                        <div className="home-content-1-info">
                            <h1 className="home-content-1-title">Who Am I?</h1>
                            <p className="home-content-1-content">
                                Hi, my name is Mingrui Liu, graduated from University of Delaware in 2019. I am a Front-end Developer passionate about developing and implementing excellent and attractive UI effects, animations webpages, and dynamic user experiences.
                            </p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="home-content-2">
                        <div className="home-content-2-skill">
                            <h1 className="home-content-2-title">What Can I Do?</h1>
                            <div className="home-content-2-content">
                                
                                {/* skills left-side */}
                                <div className="skills-left">
                                    <div className="skills">
                                        <h4>HTML5/CSS3</h4>
                                        <Progress percent={90} strokeColor="black"
                                        />
                                    </div>
                                    <div className="skills">
                                        <h4>JavaScript</h4>
                                        <Progress percent={80} strokeColor="black"/>
                                    </div>
                                    <div className="skills">
                                        <h4>React JS</h4>
                                        <Progress percent={80} strokeColor="black"
                                        />
                                    </div>
                                    <div className="skills">
                                        <h4>Node JS</h4>
                                        <Progress percent={65} strokeColor="black"
                                        />
                                    </div>
                                </div>

                                {/* skills right-side */}
                                <div className="skills-right">
                                    <div className="skills">
                                        <h4>RWD</h4>
                                        <Progress percent={85} strokeColor="black"
                                        />
                                    </div>
                                    <div className="skills">
                                        <h4>Bootstrap</h4>
                                        <Progress percent={80} strokeColor="black"/>
                                    </div>
                                    <div className="skills">
                                        <h4>jQuery</h4>
                                        <Progress percent={75} strokeColor="black"/>
                                    </div>
                                    <div className="skills">
                                        <h4>MongoDB</h4>
                                        <Progress percent={60} strokeColor="black"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="img2" src={img2} width={100} height={100} alt="02"/>
                    </div>
                </div>

                {/* Projects */}
                <div className="home-content-3">
                    <img src={img3} alt="img3" width={100} height={100}/>
                    <h1 className="home-project-title">
                        What Have I Done?
                    </h1>
                    <div className="home-projects">

                        {/* Carousel */}
                        <div id="projects" className="carousel slides" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#projects" data-slide-to="0"></li>
                                <li data-target="#projects" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Dashboard} width={752} height={502} alt="dashboard" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 style={{color: "white"}}>Dashboard</h5>
                                        <p>
                                            Dashboard project contains Homepage, user lists, chatApp, and several charts.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={Template} width={752} height={502} alt="template" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Template Selector</h5>
                                        <p style={{color: "black"}}>
                                            Display charts with selected data and chart template.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#projects" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#projects" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home-footer"></div>
            </div>
        )
    }
}

export default Home
