import React, { Component } from 'react';
import { D1, D2, D3, D4, D5, D6, D7 } from './Projects-Images';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

export class Project1 extends Component {
    render() {
        return (
            <div>
                <div id="Project1" className="carousel slide" data-ride="carousel">
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
                            <img src={D1} className="d-block w-100" height={316} width={640} alt="D1"/>
                        </div>
                        <div className="carousel-item">
                            <img src={D2} className="d-block w-100" alt="D2"/>
                        </div>
                        <div className="carousel-item">
                            <img src={D3} className="d-block w-100" alt="D3"/>
                        </div>
                        <div className="carousel-item">
                            <img src={D4} className="d-block w-100" alt="D4"/>
                        </div>
                        <div className="carousel-item">
                            <img src={D5} className="d-block w-100" alt="D5"/>
                        </div>
                        <div className="carousel-item">
                            <img src={D6} className="d-block w-100" alt="D6"/>
                        </div>
                        <div className="carousel-item">
                            <img src={D7} className="d-block w-100" alt="D7"/>
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
        )
    }
}

export default Project1
