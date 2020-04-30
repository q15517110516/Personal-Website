import React, { Component } from 'react';
import './About.css';
import 'antd/dist/antd.css';
import about from './Images/About.png';



export class About extends Component {
    render() {
        return (
            <div className="about-main">
                <img className="about-img" src={about} alt="aboutme" style={{width: 864, height: 356}} />
                
                <div className="about-content">
                    <h1>Introduction</h1>
                    <hr/>
                    <p>Hello, my name is Mingrui Liu. I'm a Front-end Developer with experience in HTML5, CSS3, JavaScript, Bootstrap, and  React JS.</p>

                    <p>The major I was studying in University of Delaware is Computer Engineering, it's more like hardware coding. I had experience in compile programs by using Python, Java, C, and C++. In addition, I also compiled hardware programs using VHDL, Mips, and Assembly Languages.</p>

                    <p>Besides studying university courses, I started to learn Front-end knowledge such as HTML5, CSS3, JavaScript, jQuery, etc. After that, I moved on to learn Front-end frameworks. The first framework I learned is Angular JS, then Angular2. After I got in touch with Reach JS, I found myself comfortable with the JSX syntax. Then I started up developing and implementing webpages using React JS.</p>

                    <p>In addition to the Front-end knowledge, I also had hands-on experience with building Back-end servers and APIs using Node JS, Express, and connecting with MongoDB.</p>
                    
                    <h1>Experience</h1>
                    <hr/>
                    <p>During the year 2017, I did my first Front-end Developer Internship at Baoshang Bank Co., Ltd. located in Chengdu, China.
                    The project was basically designing and implementing an internal webpage which displays users' profiles.</p>

                    <p>From March 2018 to June 2019, I was working as a Front-end Developer which was a part-time role in my university. The task was to develop and modify an internal forum based on React JS. I was responsible for building the reusable components which include login and logout system and also a webpage that displays users' personal information after users' login.</p>

                    <h1>Education</h1>
                    <hr/>
                    <span><b>Bachelor of Engineering, </b>Computer Engineering</span>
                    <span style={{marginLeft: 50}}> <b>University of Delaware</b></span>
                </div>
            </div>
        )
    }
}

export default About
