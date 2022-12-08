import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Favorites.css';


function Favorites() {
    let { favArr } = useSelector(function (e) {
        return e;
    })
    let dispatch = useDispatch();
    function ItemDeleteHandler(imdbID) {
        dispatch({
            type: "delete",
            load: imdbID
        })
    }
    return (
        <div className="favorites">
            Əlavə edilmiş elementlərin sayı : {favArr.length}
            <ul className="favorites__list">
                {favArr.map((item, index) => {
                    return <li className='list-item' key={index}>{item.Title} ({item.Year})
                        <button type="button" onClick={() => ItemDeleteHandler(item.imdbID)} className="favorites__delete">x</button>
                    </li>
                })}
            </ul>

        </div>
    );
}


export default Favorites;