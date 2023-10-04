import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Start from './Start';
import Home from './Home';
import Craving from './Craving';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='/start' element={<Start />} />
                <Route path='/craving' element={<Craving />} />
            </Routes>
        </div>
    );
}

export default App;