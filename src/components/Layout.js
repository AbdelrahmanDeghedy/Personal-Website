import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';

class Layout extends Component {
    render () {
        return (
            <Fragment>
                <div className="main-container">
                    <div className="side-portion">
                        <Navbar />
                    </div>

                    <div className="main-portion">
                        main Portion
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Layout;