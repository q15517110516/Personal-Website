import React, { Component } from 'react';
import { C1, C2, C3, C4, C5 } from './Projects-Images';
import { CloseCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

export class Project2 extends Component {
    render() {
        return (
            <div className="project-ChartApp">
                <div className="project">
                    <CloseCircleOutlined className="closetag" onClick={this.props.closePopup}/>

                    <div className="project-fullcontent">

                        <div className="project-title">
                            <h1><b>ChartApp</b></h1>
                        </div>

                        <div className="project-content">
                            <div className="project-content-images">
                                <div id="Project2" className="carousel slide" data-ride="carousel" >
                                    <ol className="carousel-indicators">
                                        <li data-target="#Project2" data-slide-to="0"></li>
                                        <li data-target="#Project2" data-slide-to="1"></li>
                                        <li data-target="#Project2" data-slide-to="2"></li>
                                        <li data-target="#Project2" data-slide-to="3"></li>
                                        <li data-target="#Project2" data-slide-to="4"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={C1} alt="C1"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={C2} alt="C2"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={C3} alt="C3"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={C4} alt="C4"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={C5} alt="C5"/>
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
                            </div>

                            <div className="project-description">
                                <h2><b>Description</b></h2>
                                <p>This App is a template selector that allow users to generate charts based on data in the table. Users are able to add or remove data and select the template of charts to generate charts. </p>
                                <hr/>
                                <p>
                                    <span className="project-website">Website:</span>
                                    <a href="https://q15517110516.github.io/ChartGenerator/" style={{textDecoration: "none"}}>Visit</a>
                                </p>
                                <p>
                                    <span className="project-environment">Environment:</span>
                                    <span>React JS, AmCharts, Bootstrap, JavaScript</span>
                                </p>
                                <p>
                                    <span className="project-date">Date:</span>
                                    <span>04/2020</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Project2
