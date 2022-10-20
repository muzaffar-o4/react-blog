import './App.scss';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { data } from '../../data';
import Single from '../Single/Single';



function App() {

    const [theme, setTheme] = useState("world");
    const [category, setCategory] = useState(data);
    const [singleData, setSingleData] = useState(null)

    useEffect(() => {
        setCategory(data.filter(el => el.category === theme))
    }, [theme]);

    const handleClick = (topic) => {
        setTheme(topic);
        setSingleData(null)
    }

    return (
        <div className="container">
            <div className="left">
                <div className="left__content">
                    <button onClick={() => handleClick("world")} className="left__btn">Jahon yangiliklari</button>
                    <button onClick={() => handleClick("uzb")} className="left__btn">Mahalliy yangiliklari</button>
                    <button onClick={() => handleClick("sport")} className="left__btn">Sport yangiliklari</button>
                </div>
            </div>
            <div className="right">
                <div className="right__content">
                    {singleData ?
                        <Single setPreviousNews={setSingleData} data={singleData} /> :
                        <Card setOneNews={setSingleData} data={category} />}
                </div>
            </div>
        </div>
    );
}

export default App;
