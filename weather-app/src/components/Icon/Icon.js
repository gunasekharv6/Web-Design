import React from 'react';
import './Icon.css';
// import Cloudy from '../../assets/cloudy.svg';
// import Rain from '../../assets/rain.svg';
// import Snowing from '../../assets/snowing.svg';
import Sun from '../../assets/sun.svg';
// import Thermometer from '../../assets/thermometer.svg';

const Icon = props => {
    const path = `https://openweathermap.org/img/w/${props.icon}.png`;
    return (<React.Fragment>
        <img className="icon" src={path} alt={Sun} />
        <h5>{props.description}</h5>
    </React.Fragment>
    );
    // switch (props.icon) {
    //     case 801:
    //         return <img className="icon" src={Cloudy} alt={Cloudy} />
    //     case 802:
    //         return <img className="icon" src={Cloudy} alt={Cloudy} />
    //     case 803:
    //         return <img className="icon" src={Cloudy} alt={Cloudy} />
    //     case 200:
    //         return <img className="icon" src={Rain} alt={Rain} />
    //     case 201:
    //         return <img className="icon" src={Rain} alt={Rain} />
    //     case 202:
    //         return <img className="icon" src={Rain} alt={Rain} />
    //     case 600:
    //         return <img className="icon" src={Snowing} alt={Snowing} />
    //     case 601:
    //         return <img className="icon" src={Snowing} alt={Snowing} />
    //     case 602:
    //         return <img className="icon" src={Snowing} alt={Snowing} />
    //     case 610:
    //         return <img className="icon" src={Snowing} alt={Snowing} />
    //     default:
    // return (<React.Fragment>
    //     <img className="icon" src={Sun} alt={Sun} />
    //     <h5>{props.description}</h5>
    // </React.Fragment>
    // );
    // }
}

export default Icon;