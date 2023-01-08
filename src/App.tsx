import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/footer";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
