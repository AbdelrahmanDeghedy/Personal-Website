import React, { Component, Fragment } from 'react';
import Footer from './Footer';
import ResumeProject from './ResumeProject';
import { projects } from '../utils/_Data';

class Resume extends Component {
    render () {
        return (
            <Fragment>
                
                <div className="resume-container">
                    <div className="resume-header resume-section-header">
                        <h2> Abdelrahman Aboueghedy </h2>
                        <h3> Location: Damanhour - Egypt </h3>
                        <h3> Phone: <a rel="noreferrer" className="resume-link" href="tel:+201157756842">+201157756842 </a></h3>
                        <h3> Email: <a rel="noreferrer" className="resume-link" href="mailto:abdelrahman.deghedy@gmail.com" target="_blank">abdelrahman.deghedy@gmail.com </a> </h3>
                        <h3> LinkedIn: <a rel="noreferrer" className="resume-link" href="https://www.linkedin.com/in/abdelrahman-deghedy/" target="_blank">Abdelrahman Deghedy </a></h3>
                        <h3> Github: <a rel="noreferrer" className="resume-link" href="https://github.com/AbdelrahmanDeghedy" target="_blank"> Github </a></h3>
                    </div>

                    <div className="resume-content">
                        <div className="resume-content-item resume-summary">
                            <h2 className="resume-section-header">Summary:</h2>
                            <span className='line'></span>
                            <ul className="resume-section-content">
                                <li> Enthusiastic software engineer, self-learner, writer, and in love with talking to people and hearing their stories. </li>
                                <li> Second-year student at the Communication department. I study in the Faculty of Engineering-Alexandria University. </li>
                            </ul>
                        </div>

                        <div className="resume-content-item resume-education">
                            <h2 className="resume-section-header"> Education: </h2>
                            <span className='line'></span>
                            <ul className="resume-section-content">
                                <li> Communication Department, Faculty of Engineering - Alexandria University</li>
                                <li> Anticipated graduation year: 2023 </li>
                                <li className="resume-education-gpa"> Current GPA: 3.5</li>
                            </ul>
                        </div>

                        <div className="resume-content-item resume-projects">
                            <h2 className="resume-section-header">Projects:</h2>
                            <span className='line'></span>
                            
                            {
                                Object.keys (projects).map ((pid) => {
                                    return (
                                        <ResumeProject
                                            key={pid} 
                                            name={projects[pid].name}
                                            description={projects[pid].description}
                                            technologies={projects[pid].technologies}
                                            link={projects[pid].github}
                                        />
                                    )
                                })
                            }
                            
                        </div>


                        <div className="resume-content-item resume-skills">
                            <h2 className="resume-section-header">Technical SKills</h2>
                            <span className='line'></span>
                            
                            <div className="inline resume-skill-item">
                                <span className="resume-skills-header">Languages:&nbsp;</span>
                                <ul className="inline resume-skill-item-list">
                                    <li>C++</li>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                    <li> HTML </li>
                                    <li> CSS </li>
                                </ul>
                            </div>

                            <br />
                            
                            <div className="inline resume-skill-item">
                                <span className="resume-skills-header">Frameworks:&nbsp;</span>
                                <ul className="inline resume-skill-item-list">
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Node JS</li>
                                    <li>Express</li>
                                </ul>
                            </div>

                            <br />

                            
                            <div className="inline resume-skill-item">
                                <span className="resume-skills-header">Developer Tools:&nbsp;</span>
                                <ul className="inline resume-skill-item-list">
                                    <li>Git</li>
                                    <li>Webpack</li>
                                    <li>NPM</li>
                                    <li>VS Code</li>
                                </ul>
                            </div>
                        </div>

                        <div className="resume-content-item resume-achievements-activities">
                            <h2 className="resume-section-header"> Achievements and Activities </h2>
                            <span className='line'></span>
                                <ul  className="resume-section-content">
                                    <li> One of the top 5% students in preparatory year in college.</li>
                                    <li> I participated in the 2020 ECPC.</li>
                                    <li> Me and my team were selected among the top 56 teams participating in the Dell C(4F)₂ Hackathon. </li>
                                    <li> I'm currecntly working as a student rep.
                                        <ul className="resume-section-content resume-section-content-second-level">
                                            <li> Helped students to find their career path, by building subcommunities, and sharing learning resources.</li>
                                            <li> Guided younger students, and show them how to excel in our department.</li>
                                        </ul>
                                    </li>
                                    <li> I love writing and communicating my thoughts. I'm currently writing at dev.to <a rel="noreferrer" className="resume-link" href="https://dev.to/abdelrahmandeghedy" target="_blank">check it out!</a>.</li>
                                </ul>
                        </div>

                    </div>

                </div>

                <Footer />
            </Fragment>
        )
    }
}

export default Resume;