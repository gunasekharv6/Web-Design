import axios from 'axios'

export default axios.create({
    // baseURL: "https://api.weatherbit.io/v2.0/forecast"
    baseURL: "https://api.openweathermap.org/data/2.5"
});