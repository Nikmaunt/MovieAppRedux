import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"
import {useSelector} from "react-redux";
import Slider from "react-slick"
import {getAllMovies, getAllShows} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MoieListing.scss"
import {Settings} from "../../common/settings"
import PageNotFound from "../PageNotFound/PageNotFound";

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    let renderMovies, renderShows;
    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie:any, index:any) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            // <div className="movies-error">
            //     <h3>{movies.Error}</h3>
            // </div>
    <PageNotFound/>
        );
    renderShows =
        shows.Response === "True" ? (
            shows.Search.map((movie:any, index:any) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            // <div className="shows-error">
            //     <h3>{shows.Error}</h3>
            // </div>
            <PageNotFound/>
        );
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
               <Slider {...Settings}>  {renderMovies}</Slider>
                </div>
            </div>
            <div className='shows-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    <Slider {...Settings}>  {renderShows}</Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieListing;