import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {
        city: ''
    };



    onSubmit = e => {
        e.preventDefault();
        if (this.state.city === '') {
            alert('City can not be empty');
        }
        else {
            // this.props.searchCity(this.state.city);
            // this.props.findLoc(this.state.city);
            // console.log("this.state.city", this.state.city);
            this.props.getWeather(this.state.city);
            // this.props.searchCity();
        }
        e.target.elements.city.value = "";
        // this.setState({ city: '' });
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBarChilds">
                    <h4 className="text-white">Enter city to generate weather report</h4>

                    <form onSubmit={this.onSubmit} className="formSearchCity">
                        <input type="text" name="city" id="inputSearchCity" onChange={this.onChange} placeholder="Search City" />
                        {/* <input type="text" name="city" id="inputSearchCity" placeholder="Search City" /> */}
                        <button type="submit" className="btn btn-outline-info text-white">
                            Search
                        </button>
                    </form>
                </div>

            </div>
        );
    }

}

export default SearchBar;