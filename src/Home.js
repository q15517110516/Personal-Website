import React, { Component } from 'react';
import './Home.css';
import 'antd/dist/antd.css';
import { Progress } from 'antd';

import img1 from './Images/01.png';
import img2 from './Images/02.png';
import img3 from './Images/03.png';
import img4 from './Images/04.png';


export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-img"></div>
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
                                        <Progress percent={75} strokeColor="black"
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
                <div className="home-footer"></div>
            </div>
        )
    }
}

export default Home
