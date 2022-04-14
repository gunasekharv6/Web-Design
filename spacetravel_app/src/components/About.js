import React, { Component } from 'react'



class About extends Component {
    render() {
        return <Card />;
    }
}



const Card = () => {
    const cardStyle = {
        padding: '0px',
        // display: 'flex',
        // 'flexDirection': 'column'
    };

    return (
        <div style={cardStyle}>
            <Square />
            <Label />
        </div>
    );
}

const Square = () => {
    const squareStyle = {};

    return (
        <div style={squareStyle}>
            <br></br>
            <h2>A brief about our Mission</h2>
            <br></br>
        </div>
    );
}


const Label = () => {
    const labelStyle = {
        fontFamily: "sans-serif",
        fontSize: "20px",
        padding: 10,
        margin: 10,
        marginLeft: 10,
        marginRight: 10,
        color: "#ffff",
        backgroundColor: "green",
        borderRadius: "25px",
        position: 'relative',
        left: '30%',
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold'
    };

    return (
        <p style={labelStyle}>
            <span>Looking at the sky, wondering what lies behind the stars.</span><br /><span>Well, the Impossible has been made Possible.</span> <br /><span>Space Travel is no more a distant dream. <br />Inter Galactica makes intergalactic space travel possible by creating worm holes.</span>
            <br /><br /><span id='spaninabout' style={{ fontWeight: 'bolder', fontSize: '140%' }}>Embrace yourself for the Journey of a lifetime.</span>
        </p>
    );
}




export default About
