import React, { Component } from 'react';
import './Home.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'antd';
import ReactModal from 'react-modal';
import {img1, 
        img2, 
        img3,
        Dashboard,
        Template,
        Title,
        footerImage } from './Images';
import video from './Images/Background.webm';
import Project1 from './Project1';
import Project2 from './Project2';




export class Home extends Component {

    constructor(){
        super();
        this.state={
            showProject1: false,
            showProject2: false,
        }
    }

    handleOpenProject1(){
        this.setState({
            showProject1: true,
        });
    }
    handleOpenProject2(){
        this.setState({
            showProject2: true,
        });
    }

    handleCloseProject1(){
        this.setState({
            showProject1: false,
        })
    }
    handleCloseProject2(){
        this.setState({
            showProject2: false,
        })
    }

    render() {
        return (
            <div className="home">
                <div className="home-background" style={{position: "relative"}}>
                    <img src={Title} alt="title" style={{zIndex: 2, position: "absolute", width: "100%"}}/>
                    <video autoPlay loop muted style={{width: "100%", zIndex: 1}} >
                        <source src={video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="home-content">

                    {/* Information */}
                    <div className="home-content-1">
                        <img className="img1" src={img1} width={100} height={100} alt="01"/>
                        <div className="home-content-1-info">
                            <h1 className="home-content-1-title"><b>Who Am I?</b></h1>
                            <p className="home-content-1-content">
                                Hi, my name is Mingrui Liu, graduated from University of Delaware in 2019. I am a Front-end Developer passionate about developing and implementing excellent and attractive UI effects, animations webpages, and dynamic user experiences.
                            </p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="home-content-2">
                        <div className="home-content-2-skill">
                            <h1 className="home-content-2-title"><b>What Can I Do?</b></h1>
                            <div className="home-content-2-content">
                                
                                {/* skills left-side */}
                                <div className="skills-left">
                                    <div className="skills">
                                        <h4><b>HTML5/CSS3</b></h4>
                                        <Progress percent={90} strokeColor="black"
                                        />
                                    </div>
                                    <div className="skills">
                                        <h4><b>JavaScript</b></h4>
                                        <Progress percent={80} strokeColor="black"/>
                                    </div>
                                    <div className="skills">
                                        <h4><b>React JS</b></h4>
                                        <Progress percent={80} strokeColor="black"
                                        />
                                    </div>
                                    <div className="skills">
                                        <h4><b>Node JS</b></h4>
                                        <Progress percent={65} strokeColor="black"
                                        />
                                    </div>
                                </div>

                                {/* skills right-side */}
                                <div className="skills-right">
                                    <div className="skills">
                                        <h4><b>RWD</b></h4>
                                        <Progress percent={85} strokeColor="black"
                                        />
                                    </div>
                                    <div className="skills">
                                        <h4><b>Bootstrap</b></h4>
                                        <Progress percent={80} strokeColor="black"/>
                                    </div>
                                    <div className="skills">
                                        <h4><b>jQuery</b></h4>
                                        <Progress percent={75} strokeColor="black"/>
                                    </div>
                                    <div className="skills">
                                        <h4><b>MongoDB</b></h4>
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
                <div className="home-content-3" >
                    <img className="img3" src={img3} alt="img3" width={100} height={100}/>
                    <h1 className="home-project-title">
                        <b>What Have I Done?</b>
                    </h1>

                    {/* Carousel */}
                    <div className="home-projects">
                        <div id="projects" className="carousel slides" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#projects" data-slide-to="0"></li>
                                <li data-target="#projects" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">

                                {/* Dashboard */}
                                <div className="carousel-item active">
                                    <img className="dashboard-image" src={Dashboard} alt="dashboard" onClick={() => this.handleOpenProject1()} />
                                    <div className="carousel-caption">
                                        <h5 style={{color: "white"}}><b>Dashboard</b></h5>
                                        <p className="dashboard-p">
                                            Dashboard project contains Homepage, user lists, chatApp, and several charts.
                                        </p>
                                    </div>
                                    <ReactModal
                                        id="myModal1"
                                        isOpen={this.state.showProject1}
                                        onRequestClose={this.handleCloseModal1}
                                        className="projectmodal-content"
                                        overlayClassName="projectmodal-overlay"
                                        bodyOpenClassName="projectmodal-open"
                                    >
                                        <Project1 closePopup={() => this.handleCloseProject1()}/>
                                    </ReactModal>
                                </div>

                                {/* ChartApp */}
                                <div className="carousel-item">
                                    <img className="chartApp-image" src={Template} alt="template" onClick={() => this.handleOpenProject2()}/>
                                    <div className="carousel-caption" style={{zIndex: 9}}>
                                        <h5><b>Template Selector</b></h5>
                                        <p className="chartApp-p" style={{color: "black"}}>
                                            Display charts with selected data and chart template.
                                        </p>
                                    </div>
                                    <ReactModal
                                        id="myModal2"
                                        isOpen={this.state.showProject2}
                                        onRequestClose={this.handleCloseModal2}
                                        className="projectmodal-content"
                                        overlayClassName="projectmodal-overlay"
                                        bodyOpenClassName="projectmodal-open"
                                    >
                                        <Project2 closePopup={() => this.handleCloseProject2()}/>
                                    </ReactModal>
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

                {/* Achievement */}
                <div className="home-content-4">
                    <div className="yearsOfExp">
                        <span className="number">
                            3+
                        </span>
                        <span className="numberDescription">
                            YEARS OF XPERIENCE
                        </span>
                    </div>
                    <div className="totalProjects">
                        <span className="number">
                            100+
                        </span>
                        <span className="numberDescription">
                            PROJECT COMPLETED
                        </span>
                    </div>
                    
                </div>

                {/*<div className="home-footer">
                    <img src={footerImage} alt="foot-image"/>
                </div>*/}
            </div>
        )
    }
}

export default Home
