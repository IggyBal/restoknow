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
                    <button className="btn normal-case">Casual</button>
                    <button className="btn normal-case">Fancy</button>
                    <button className="btn normal-case">Chill</button>
                    <button className="btn normal-case">Healthy</button>
                </div>
                <div className="btn-group btn-group-vertical space-y-2">
                    <button className="btn normal-case">Romantic</button>
                    <button className="btn normal-case">Kiddy</button>
                    <button className="btn normal-case">Cozy</button>
                    <button className="btn normal-case">Artsy</button>
                </div>
            </div>
            
            <div className="btn normal-case mx-10">Choose for me</div>
            
            <Link to="/craving" className="btn normal-case mx-10">Next</Link>
            
        </div>
    );
}

export default Start;