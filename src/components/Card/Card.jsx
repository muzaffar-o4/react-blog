import React from 'react';
import './card.scss'

function handleClick() {

    // return (
    //     // <div key={index} className="card">
    //     //     <h1>{el.id}</h1>
    //     //     <h3 className="card__title">{el.title}</h3>
    //     //     <p className="card__subtitle"> {el.description} </p>
    //     //     <button onClick={() => handleClick()} className="card__btn">Click me</button>
    //     // </div>
    // )
};



const Card = ({ data, setOneNews }) => {
    return (
        <>
            {
                data?.map((el, index) => {
                    return (
                        <div onClick={() => setOneNews(el)} key={index} className="card">
                            <h3 className="card__title">{el.title}</h3>
                            <p className="card__subtitle"> {el.description} </p>
                            <button onClick={() => handleClick(el)} className="card__btn">Click me</button>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Card;
