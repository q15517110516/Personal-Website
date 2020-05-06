import React, { Component } from 'react';
import { C1, C2, C3, C4, C5 } from './Projects-Images';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

export class Project2 extends Component {
    render() {
        return (
            <div className="project">
                <div className="project-ChartApp">
                    <div className="project-title">
                        <h1><b>ChartApp</b></h1>
                    </div>

                    <div className="project-content">
                        <div id="Project2" className="carousel slide" data-ride="carousel" style={{width: 800}}>
                            <ol className="carousel-indicators">
                                <li data-target="#Project2" data-slide-to="0"></li>
                                <li data-target="#Project2" data-slide-to="1"></li>
                                <li data-target="#Project2" data-slide-to="2"></li>
                                <li data-target="#Project2" data-slide-to="3"></li>
                                <li data-target="#Project2" data-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={C1} height={396} width={800} alt="C1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={C2} height={396} width={800} alt="C2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={C3} height={396} width={800} alt="C3"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={C4} height={396} width={800} alt="C4"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={C5} height={396} width={800} alt="C5"/>
                                </div>
                                
                            </div>
                            <a className="carousel-control-prev" href="#Project2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#Project2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                        <div className="project-description">
                            <h2><b>Description</b></h2>
                            <p>This project is a dashboard template that allows checking users information, send messages to other team members, manage pending affairs, personal and total performances, and manage users' genders and ages.  </p>
                            <hr/>
                            <p>
                                <span className="project-website">Website:</span>
                                <a href="https://github.com/q15517110516/ChartApp" style={{textDecoration: "none"}}>Visit</a>
                            </p>
                            <p>
                                <span className="project-date">Date:</span>
                                <span>04/2020</span>
                            </p>
                        </div>
                        
                    </div>
                </div>    
            </div>
        )
    }
}

export default Project2
