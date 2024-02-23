import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import FormPage from './FormPage';
import ThankYouPage from './ThankYouPage';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<FormPage/>}/>
                <Route path="/thank-you" element={<ThankYouPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;