import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from "./Home";
import { createBrowserHistory } from 'history';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Jobs from './Jobs';





function App() {

    return (
        <div>
            <Router history={createBrowserHistory()}>
                <Routes>
                    <Route exact path='/' element={<Header><Home /><Footer /></Header>} />
                    <Route path='/about' element={<Header><About /><Footer /></Header>} />
                    <Route path='/contact' element={<Header><Contact /><Footer /></Header>} />
                    <Route path='/jobs' element={<Header><Jobs /><Footer /></Header>} />
                </Routes>
            </Router>

        </div>
    )
}

export default App
