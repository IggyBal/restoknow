import React from 'react';
import { Link } from "react-router-dom";

const Craving = () => {
    return (
        <div className="container flex flex-col pt-12 pb-6 justify-between items-stretch h-screen items-center">
            <ul className="steps">
                <li className="step"></li>
                <li className="step step-success"></li>
                <li className="step"></li>
            </ul>
            <h1 className="text ts-xxl text-center font-bold">What food are you craving?</h1>
            <div className="container justify-center flex space-x-2">
                <div className="btn-group btn-group-vertical space-y-2">
                    <button className="btn normal-case">Local</button>
                    <button className="btn normal-case">Fast food</button>
                    <button className="btn normal-case">Grilled</button>
                    <button className="btn normal-case">Seafood</button>
                </div>
                <div className="btn-group btn-group-vertical space-y-2">
                    <button className="btn normal-case">Foreign</button>
                    <button className="btn normal-case">Homemade</button>
                    <button className="btn normal-case">Sweet</button>
                    <button className="btn normal-case">Noodles</button>
                </div>
            </div>
            
            <div className="btn normal-case mx-10">Choose for me</div>
            <div className="btn normal-case mx-10">Next</div>
            <Link to="/start" className="btn text-xs normal-case mx-10">Back</Link>

        </div>
    );
}

export default Craving;