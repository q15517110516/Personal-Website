import React, { Component } from 'react';
import { D1, D2, D3, D4, D5, D6, D7 } from './Projects-Images';
import { CloseCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

export class Project1 extends Component {
    render() {
        return (
            <div className="project-dashboard">
                
                <div className="project">
                    <CloseCircleOutlined className="closetag" onClick={this.props.closePopup}/>
                    
                    <div className="project-fullcontent">
                        <div className="project-title">
                            <h1><b>Dashboard</b></h1>
                        </div>

                        <div className="project-content">
                            <div className="project-content-images">
                                <div id="Project1" className="carousel slide" data-ride="carousel" style={{width: 800}}>
                                    <ol className="carousel-indicators">
                                        <li data-target="#Project1" data-slide-to="0"></li>
                                        <li data-target="#Project1" data-slide-to="1"></li>
                                        <li data-target="#Project1" data-slide-to="2"></li>
                                        <li data-target="#Project1" data-slide-to="3"></li>
                                        <li data-target="#Project1" data-slide-to="4"></li>
                                        <li data-target="#Project1" data-slide-to="5"></li>
                                        <li data-target="#Project1" data-slide-to="6"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={D1} alt="D1"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={D2} alt="D2"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={D3} alt="D3"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={D4} alt="D4"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={D5} alt="D5"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={D6} alt="D6"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={D7} alt="D7"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#Project1" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#Project1" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div className="project-description">
                                <h2><b>Description</b></h2>
                                <p>The project is a dashboard template that can be used to check user information, send messages to other team members, manage pending transactions, view personal and overall performance, and manage the user's gender and age.  </p>
                                <hr/>
                                <p>
                                    <span className="project-website">Website:</span>
                                    <a href="https://github.com/q15517110516/Dashboard" style={{textDecoration: "none"}}>Visit</a>
                                </p>
                                
                                <p>
                                    <span className="project-environment">Environment:</span>
                                    <span>React JS, D3.js, Bootstrap, JavaScript</span>
                                </p>
                                <p>
                                    <span className="project-date">Date:</span>
                                    <span>07/2019</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Project1
