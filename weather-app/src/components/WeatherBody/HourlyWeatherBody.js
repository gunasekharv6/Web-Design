import React from 'react';
// import PropTypes from 'prop-types';
import './WeatherBody.css';
import Days from '../Days/Days';
import Icon from '../Icon/Icon';
import Temp from '../Temp/Temp';

function HourlyWeatherBody(props) {
    return (
        <div className="WeatherBody card">
            <Days day={props.day} />
            <Icon icon={props.icon} />
            {/* <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} description={props.description} /> */}
        </div>
    )
}

HourlyWeatherBody.propTypes = {

}

export default HourlyWeatherBody

