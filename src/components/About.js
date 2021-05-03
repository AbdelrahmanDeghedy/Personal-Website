import React, { Component, Fragment } from 'react';
import meImg from "../img/small-version.jpg";

class About extends Component {
    render () {
        return (
            <Fragment>
                <div className="about-container">
                    <div className="main-content-container">
                        <div className="main-content-name">
                            Abdelrahman Deghedy
                        </div>
                        <div className="main-content-description">
                            Self-Learning Software Developer.
                        </div>
                    </div>

                    <div className="summary-content-container">
                        <div className="summary-content-img">
                            <img src={meImg} alt="Abdelrahman's img" className="summary-content-img-itself"/>
                            <div className="summary-content-img-text">
                                Black / White Abdelrahman
                            </div>
                        </div>
                        <div className="summary-content-paragraph summary-content-paragraph-first">
                        I'm a second-year student at the Communication department. I study in the Faculty of Engineering-Alexandria University. 
                        Self-learner, writer, and in love with talking to people and hearing their stories.

                        </div>

                        <div className="summary-content-paragraph summary-content-paragraph-second">
                        I'm a second-year student at the Communication department. I study in the Faculty of Engineering-Alexandria University. 
                        Self-learner, writer, and in love with talking to people and hearing their stories.
                        </div>
                    </div>

                    <div className="footer-container">
                        <div className="footer-rights">
                            All rights reserved &copy; 2021.
                        </div>
                        <div className="footer-creator">
                            Coded by: Abdelrahman Deghedy.
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default About;