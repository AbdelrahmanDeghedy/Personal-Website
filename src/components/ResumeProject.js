import React, { Component, Fragment } from 'react';

class ResumeProject extends Component {
    render () {
        const { name, description, technologies, link } = this.props;
        return (
            <Fragment>
                <div>
                    <h3 class="resume-project-item-name"> {name} </h3>
                    <ul  className="resume-section-content">
                        {
                            description.map ((descriptionItem) => {
                                return (
                                    <li key={descriptionItem}> {descriptionItem} </li>
                                )
                            })
                        }
                    </ul>
                    <h3> Technologies used: </h3>
                    <ul className="resume-section-content inline resume-item-technologies-list">
                        {
                            technologies.map ((tech) => {
                                return ( 
                                    <li key={tech}> {tech} </li>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <a className="resume-link" href={link} target="_blank">Github Link</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ResumeProject;