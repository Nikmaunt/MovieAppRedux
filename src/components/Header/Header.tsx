import React, {FormEvent,  useState} from 'react';
import {Link} from "react-router-dom";
import user from "../../images/user.png"
import "./Header.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice";

const Header = () => {
    const [term ,setTerm] = useState('')
    let [error, setError] = useState<string | null>(null)
    const dispatch =useDispatch()
    const submitHandler  = (e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        if (term !== "") {
            dispatch(fetchAsyncMovies(term))
            dispatch(fetchAsyncShows(term))
            setTerm('')
            setError('')
        } else {
            setError("Please enter search term");
        }
    }

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Movie App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input className={ error ? 'input-error' : 'search-bar' }
                        type="text"
                        value={term}
                        placeholder={error ? "Please enter search term" : "Search Movies or Shows"}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;