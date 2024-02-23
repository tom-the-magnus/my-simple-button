import React, { useState } from 'react';
import SimpleButton from './SimpleButton';
import { useNavigate } from 'react-router-dom';

function FormPage() {
    const [buttonText, setButtonText] = useState("submit form");
    // You need to define navigate. It's really use useNavigte();
    let navigate = useNavigate();
    let page = "/thank-you"

    // handleSubmit just routes to other page using navigate
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/thank-you")
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            {/* On submit behavior is defined in form declaration. */}
            <form onSubmit={handleSubmit} className="text-center">
                {/* This must be a bootstrap reference, need to read up. */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control form-control-lg" id="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <SimpleButton buttonText={buttonText}/>
            </form>
        </div>
    );
}

export default FormPage;