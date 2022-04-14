import React, { Component } from 'react'
import spaceimg from '../assets/space-rocket.jpg'
import './index.css'
// import PropTypes from 'prop-types'


class Home extends Component {

  render() {
    return <Card />;
  }
}


const Square = () => {
  // console.log("Hi2");
  return (
    <div style={{ 'margin': 'auto', 'textAlign': 'center' }}>
      <figure>
        <figcaption style={{ color: 'white', fontSize: '20px' }}><span id='content1'>Travelling has entered a New Dimension</span><span id='content2'>Travel to the world of Stars</span></figcaption>
        <img src={spaceimg} alt='rocket' style={{ width: '1000px' }}></img>
      </figure>
      <p></p>

    </div >
  )
}

class Card extends Component {
  render() {
    return (
      <div>
        <Square />
      </div>
    );

  }
}

export default Home
