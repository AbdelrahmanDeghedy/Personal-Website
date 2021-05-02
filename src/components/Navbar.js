import React, { Component, Fragment } from 'react';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { TiSocialInstagram, TiSocialLinkedin, TiSocialGithub, TiSocialTwitter, TiSocialFacebook } from 'react-icons/ti';


class Navbar extends Component {
    render () {
        return (
            <Fragment>
                <div className="sidebar">
                    <ul className="sidebar-navbar">
                        <li className="navbar-item navbar-item-about"> About Me </li>
                        <li className="navbar-item navbar-item-contact"> Contact Me </li>
                        <a className="navbar-resume-link" href="https://drive.google.com/file/d/14pER2spfeTQz0BPpgMcPnI9opqfbBtD5/view" target="_blank">
                            <li className="navbar-item navbar-item-resume"> Resume </li>
                        </a>
                        <li className="navbar-item navbar-item-projects"> Projects </li>
                    </ul>

                    <div className="navbar-social">
                        <div className="navbar-social-text">
                            Reach Me On Social Networks
                        </div>

                        <div className="navbar-social-icons-container">
                            <div className="navbar-social-icon-facebook">
                                <a href="https://www.facebook.com/AbdelrahmanDeghedy/" target="_blank">
                                    <TiSocialFacebook />
                                </a>
                            </div>
                            <div className="navbar-social-icon-twitter">
                                <a href="https://twitter.com/Deghedy_" target="_blank">
                                    <TiSocialTwitter />
                                </a>
                            </div>
                            <div className="navbar-social-icon-github">
                                <a href="https://github.com/AbdelrahmanDeghedy" target="_blank">
                                    <TiSocialGithub /> 
                                </a>
                            </div>
                            <div className="navbar-social-icon-linkidin">
                                <a href="https://www.linkedin.com/in/abdelrahman-deghedy/" target="_blank">
                                    <TiSocialLinkedin />
                                </a>
                            </div>
                            <div className="navbar-social-icon-instagram">
                                <a href="https://www.instagram.com/abdelrahman_deghedy/" target="_blank">
                                    <TiSocialInstagram />
                                </a>
                            </div>
                            <div className="navbar-social-icon-behance">
                                <a href="https://www.behance.net/Deghedy" target="_blank">
                                    <AiFillBehanceCircle />
                                </a>
                            </div>
                        </div>
                    </div>



                </div>

            </Fragment>
        )
    }
}

export default Navbar;