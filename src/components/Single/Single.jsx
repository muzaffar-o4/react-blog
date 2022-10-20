import React from 'react';
import './single.scss';

const Single = ({ data, setPreviousNews }) => {
    return (
        <div className="card">
            <h3 className="card__title">{data.title}</h3>
            <p className="card__sub"> {data.description} </p>
            <button onClick={() => setPreviousNews()} className="card__btn">previous</button>
        </div>
    )
}

export default Single;