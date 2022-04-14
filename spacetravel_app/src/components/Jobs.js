import React, { Component } from "react";
import JOBS from "../data/jobs";
import './index.css';





class Job extends Component {

    state = { displayDescription: false };

    toggleDisplay = () => {
        this.setState({ displayDescription: !this.state.displayDescription });
    }


    render() {
        const { title, description, link } = this.props.job;
        return (
            <div className="job-align">
                <h3>{title}</h3>
                {
                    this.state.displayDescription ? (
                        <div
                            style={{
                                'height': '200px',
                                'display': 'flex',
                                'flexDirection': 'column',
                                'justifyContent': 'space-between',
                                'padding': '15px',
                                marginTop: '10px'
                            }}>
                            <p>{description}</p>
                            <a href={link} style={{ display: "block" }}>Apply</a>
                            <button onClick={this.toggleDisplay}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplay} style={{ marginTop: '25px' }}>Read more</button>
                        </div>
                    )
                }
                {/* <img src={image} alt='profile' style={{ width: 200, height: 120 }} /> */}

            </div >
        );
    }
}

class Jobs extends Component {
    render() {
        return (
            <div>
                <br></br>
                <h2>Available Opportunities:</h2>
                <br></br>
                <br></br>
                <div className='job-flex'>
                    {
                        JOBS.map(JOB => {
                            return <Job key={JOB.id} job={JOB} />
                        })
                    }
                </div>
            </div>
        );
    }
}






export default Jobs;