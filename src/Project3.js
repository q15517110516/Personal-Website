import React, { Component } from 'react';
import { M1, M2, M3, M4 } from './Projects-Images';
import { CloseCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';


export class Project3 extends Component {
    render() {
        return (
            <div className="project-MovieBrowser">
                <div className="project">
                    <CloseCircleOutlined className="closetag" onClick={this.props.closePopup}/>

                    <div className="project-fullcontent">

                        <div className="project-title">
                            <h1><b>Movie Browser</b></h1>
                        </div>

                        <div className="project-content">
                            <div className="project-content-images">
                                <div id="Project3" className="carousel slide" data-ride="carousel" >
                                    <ol className="carousel-indicators">
                                        <li data-target="#Project3" data-slide-to="0"></li>
                                        <li data-target="#Project3" data-slide-to="1"></li>
                                        <li data-target="#Project3" data-slide-to="2"></li>
                                        <li data-target="#Project3" data-slide-to="3"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={M1} alt="M1"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={M2} alt="M2"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={M3} alt="M3"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={M4} alt="M4"/>
                                        </div>                                
                                    </div>
                                    <a className="carousel-control-prev" href="#Project3" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#Project3" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <div className="project-description">
                                <h2><b>Description</b></h2>
                                <p>This is a Movie Browser App. Users are able to add their favorite movies to Favorites, and they can also add them to the Cart to make purchase for later viewing. In addition, they can view the movies they just bought on the Review page. </p>
                                <hr/>
                                <p>
                                    <span className="project-website">Website:</span>
                                    <a href="https://q15517110516.github.io/MovieList/" style={{textDecoration: "none"}}>Visit</a>
                                </p>
                                <p>
                                    <span className="project-environment">Environment:</span>
                                    <span>React JS, JavaScript, Ant Design, React-Redux</span>
                                </p>
                                <p>
                                    <span className="project-date">Date:</span>
                                    <span>06/2020</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Project3
