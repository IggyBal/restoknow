import React from 'react';
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div className="container flex flex-col py-12 justify-between items-stretch h-screen items-center">
            <ul className="steps">
                <li className="step step-success"></li>
                <li className="step"></li>
                <li className="step"></li>
            </ul>
            <h1 className="text ts-xxl text-center font-bold">Pick your mood!</h1>
            <div className="container justify-center flex space-x-2">
                <div className="btn-group btn-group-vertical space-y-2">
                    <input type="checkbox" aria-label="🛍 Casual" className="btn normal-case" />
                    <input type="checkbox" aria-label="🍷 Fancy  " className="btn normal-case" />
                    <input type="checkbox" aria-label="🍃 Chill" className="btn normal-case" />
                    <input type="checkbox" aria-label="🥗 Diet" className="btn normal-case" />
                </div>
                <div className="btn-group btn-group-vertical space-y-2">
                    <input type="checkbox" aria-label="🌹 Date" className="btn normal-case" />
                    <input type="checkbox" aria-label="🧢 Kiddy" className="btn normal-case" />
                    <input type="checkbox" aria-label="🛋️ Cozy" className="btn normal-case" />
                    <input type="checkbox" aria-label="🎨 Artsy" className="btn normal-case" />
                </div>
            </div>
            
            <p className="text-xs text-center font-bold">or</p>


            <div className="btn normal-case mx-10">Choose for me</div>
            
            <Link to="/craving" className="btn normal-case mx-10">Next</Link>
            
        </div>
    );
}

export default Start;