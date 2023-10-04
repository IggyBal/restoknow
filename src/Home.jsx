import React from 'react';
import { Link } from "react-router-dom";

import './Home.css';

const Home = () => {
    return (
        <div className="container flex flex-col justify-between py-20 h-screen">
            <div className="flex flex-col center py-2">
                <h1 className="text-xl text-center font-bold text-red-500 ">Restoknow</h1>
                <p className="text-xs text-center mx-1">Satisfy cravings nearby!</p>
            </div>

            <Link to="/start" className="mx-auto">
                <button 
                    className="btn btn-begin normal-case px-12"
                    onClick={() => {}}>Begin dining</button>
            </Link>
        </div>
    );
}

export default Home;
