import React from 'react';
import './App.css';
import weather from '../apis/api';
// import location from '../apis/apiExtractLatLon';
import WeatherBody from "./WeatherBody/WeatherBody";
// import HourlyWeatherBody from "./WeatherBody/HourlyWeatherBody";
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import DetailedInfo from './DetailedInfo';
import uuid from 'uuid';


const API_KEY = "7aa46526b4593f781f6fa60bef559165";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // tiles : [],
            temp: [],
            city: null,
            isLoaded: false
        };
    }

    componentDidMount() {
        this.setState({ isLoaded: true });
    }


    // searchCity = async (city, latitude, longitude) => {
    //     const dailyWeather = await weather.get(`onecall?lat=${latitude}&lon=${longitude}&exclude=current,alerts,minutely&appid=7aa46526b4593f781f6fa60bef559165`);
    //     let temp = [];
    //     // const low_temp = dailyWeather.data.daily[0].temp.min;
    //     // const max_temp = dailyWeather.data.daily[0].temp.max;
    //     // let hourly = dailyWeather.data.hourly;
    //     // console.log("DAILY DATA: ", dailyWeather.data.daily);
    //     // console.log("HOURLY DATA: ", dailyWeather.data.hourly);
    //     let hourly = dailyWeather.data.hourly;
    //     let temp2 = []
    //     hourly.forEach(element => {
    //         let date = new Intl.DateTimeFormat(['ban', 'id'], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(element.dt * 1e3));
    //         temp2.push(date);
    //     })
    //     console.log("HOURLY DATA: ", temp2);

    //     let daily = dailyWeather.data.daily;
    //     console.log("DAILY DATA: ", daily);
    //     let counter = 0;
    //     daily.forEach(element => {
    //         let date = new Intl.DateTimeFormat(['ban', 'id'], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(element.dt * 1e3));
    //         // console.log("dateTime", date.substring(0, 2));
    //         let obj = {};
    //         obj.id = ++counter;
    //         obj.low_temp = element.temp.min;
    //         obj.max_temp = element.temp.max;
    //         obj.date = date.substring(0, 10); //date.substring(0, 2)
    //         obj.icon = element.weather[0].id;
    //         obj.description = element.weather[0].description;
    //         // console.log("DAILY DATA: ", obj);
    //         temp.push(obj)
    //     });

    //     this.setState({
    //         temp,
    //         city,
    //         isLoaded: true
    //     });
    // }

    // findLocation = async (city) => {
    //     const coordintes = await location.get(`direct?q=${city}&limit=1&appid=7aa46526b4593f781f6fa60bef559165`);
    //     const lat = coordintes.data[0].lat;
    //     const lon = coordintes.data[0].lon;
    //     this.searchCity(city, lat, lon);
    // };

    _groupByDays = data => {
        return (data.reduce((list, item) => {
          const forecastDate = item.dt_txt.substr(0, 10);
        //   console.log("forecastDate", forecastDate);
          list[forecastDate] = list[forecastDate] || [];
          list[forecastDate].push(item);
        //   console.log("forecastDate", list);
          return list;
        }, {}));
      };

      
    getWeather = async (city) => {
        const output = await weather.get(`forecast?q=${city}&appid=${API_KEY}&units=imperial`);
        // console.log(output.data.list);

        if(output.data.list && output.data.list.length){
            const reducedData = this._groupByDays(output.data.list);
            // console.log("reducedData", reducedData);
            const tiles1 = Object.values(reducedData);
            // console.log("tiles1", tiles1);
            this.setState({
                temp: tiles1,
                city: city,
                // dailyData :dailyData,
                isLoaded: true
              });

        }
    }




    _getDayInfo = data => {
        const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        return daysOfWeek[new Date(data[0].dt_txt).getDay()];
    };

    _getInfo = (data) => {
        const min = [];
        const max = [];
        data.map(item => {
            max.push(item.main.temp_max);
            min.push(item.main.temp_min);
        });

        const minMax = {
            min: Math.round(Math.min(...min)),
            max: Math.round(Math.max(...max)),
        };
        return minMax;
    }
    counter=0;


    render() {

        //Loader
        if (!this.state.isLoaded) {
            return <Loader msg={'Loading...'} />;
        }
        // const forecastTiles = this.state.temp;

        return (
            
            <Router>

            
                {/* <React.Fragment> */}
                    {/* <SearchBar city={this.state.city} getWeather = {this.getWeather} findLoc={this.findLocation} searchCity={this.searchCity} /> */}
                {/* </React.Fragment> */}

                

                <Routes>
                    <Route exact path="/" element={(
                        
                        <div className="App">
                            <SearchBar city={this.state.city} getWeather = {this.getWeather} findLoc={this.findLocation} searchCity={this.searchCity} />

                                            
                            <div className="weatherContainer pt-3 pb-3">
                            <h5 className="cityName">{this.state.city}</h5>
                            {
                                this.state.temp.map((item,i) => {
                                    let dayinfo = this._getDayInfo(item);
                                    let pathname = `/days/${dayinfo}`;
                                    const minmaxtemp = this._getInfo(item);
                                    return <Link to={{ pathname: `${pathname}` }} key={i}><WeatherBody key={i} path= {pathname} day={this._getDayInfo(item)} dayinfo = {dayinfo} icon={item[0].weather[0].icon} minTemp={minmaxtemp.min} maxTemp={minmaxtemp.max} description={item[0].weather[0].description} /></Link>;
                                    // while (element.id <= 5) {
                                    //     return <WeatherBody key={element.id} day={element.date} icon={element.icon} minTemp={element.low_temp} maxTemp={element.max_temp} description={element.description} />;
                                    // } return null;
                                })
                            }
                            </div>
                        </div>
                        
                    )}/>
                    <Route path="/days/:id" element={<DetailedInfo key={this.counter++} data={this.state.temp}/>}/>
                    {/* this.counter++; */}

                    {/* <Route path="/days/:id" render={(props) => {console.log("HIIIIIII");return <DetailedInfo data={this.state.temp} id={props.match.params.id}/>}} ></Route> */}
                </Routes>   
            </Router>

        );
    }

};

export default App;






        //Methods

        // const minTemp = this.state.temp.map(el => {
        //     return parseInt(el.low_temp)
        // });

        // const maxTemp = this.state.temp.map(el => {
        //     return parseInt(el.max_temp)
        // });

        // const icon = this.state.temp.map(el => {
        //     return el.icon;
        // });

        // const description = this.state.temp.map(el => {
        //     return el.description;
        // });


        



    // let date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'UTC' }).format(new Date(current.dt * 1e3));
    // console.log("currentWeather", date,);


    // console.log("currentWeather", currentWeather.data.current);
    // const cityName = city;
    // // const min_temp = currentWeather.data.current.temp;
    // // const max_temp = currentWeather.data.daily[0].temp.max;
    // let daily = currentWeather.data.current;
    // // console.log("dateTIme", daily);
    // let date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'UTC' }).format(new Date(daily.dt * 1e3));
    // console.log("dateTIme", date);

    // let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(unixdate);
    // console.log("date", date);
    // const temp = res.data.data;
    // const city = res.data.city_name;


    