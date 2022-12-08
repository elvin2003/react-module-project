import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBox.css';

function SearchBox() {

    let { inputValue } = useSelector(
        function (a) {
            //console.log(a);
            return a;
        }
    )

    useEffect(
        function () {

        }, []
    )
    let dispatch = useDispatch();

    let searchLineChangeHandler = (e) => {
        dispatch({
            type: 'inputChange',
            load: e.target.value
        })
    }
    let searchBoxSubmitHandler = (e) => {
        dispatch({
            type: 'searchClick',
            load: true
        })
        e.preventDefault();
        async function fetchData() {
            let response = await fetch(`https://www.omdbapi.com/?apikey=d81407e8&s=` + inputValue)
                .then(data => {
                    return data.json();
                }).then(result => {
                    //console.log(result);
                    if (result.Response == 'True') {
                        dispatch({
                            type: 'fetchData',
                            load: result.Search
                        })
                    } else if (result.Response == 'False') {
                        dispatch({
                            type: "reset"
                        })
                    }
                })
        }
        fetchData();
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={inputValue}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!inputValue}
                >
                    Искать
                </button>
            </form>
        </div>
    );

}

export default SearchBox;