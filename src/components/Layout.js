import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';

class Layout extends Component {
    render () {
        return (
            <Fragment>
                <div className="main-container">
                    <div className="side-portion">
                        <Navbar />
                    </div>

                    <div className="main-portion">
                        <Route exact path="/" component={About}/>
                        <Route exact path="/contact" component={About}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/quotes" component={About}/>
                        
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Layout;