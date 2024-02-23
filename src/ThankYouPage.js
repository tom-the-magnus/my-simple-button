import React, {useEffect} from 'react';
import confetti from 'canvas-confetti'
import { useNavigate } from 'react-router-dom';
import SimpleButton from './SimpleButton';

function ThankYouPage() {
    const ButtonText = "Return to home"
    // let navigate = useNavigate();
    let page = "/"
    
    useEffect(() => {
        confetti(({
            particleCount: 100,
            spread: 70,
            origin: {7: 0.6}
        }))
    }, []);

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     navigate("/")
    // };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>Thank you!</h1>
            {/* Your confetti animation or other elements */}
            <SimpleButton page={page}>Return to home</SimpleButton>
        </div>    
    );
}

export default ThankYouPage;