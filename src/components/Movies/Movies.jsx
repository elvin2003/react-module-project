import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useSelector } from 'react-redux';

function Movies() {
    let { arr,searchClicked } = useSelector(
        function (a) {
            return a;
        }
    )
    return (
        <ul className="movies">
            {arr.length > 0 ? arr.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            )) : <h1 className={searchClicked? "visibleRes":"hiddenRes"}>Axtardığınıza uyğun heç bir nəticə tapılmadı</h1>}
        </ul>
    );

}

export default Movies;