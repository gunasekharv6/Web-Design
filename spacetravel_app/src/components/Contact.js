import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>

                <form id="contact">
                    <h2>Leave us a message!</h2>
                    <br></br>

                    <input placeholder="Your name" type="text" tabIndex="1" required ></input> {/*autoFocus*/}


                    <input placeholder="Your Email Address" type="email" tabIndex="2" required></input>


                    <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" ></input>


                    <input placeholder="Your Website (optional)" type="url" tabIndex="4" ></input>


                    <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>

                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

                </form>
            </div>
        );
    }
}
