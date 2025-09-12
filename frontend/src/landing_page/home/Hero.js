import React from 'react';

function Hero() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img className='mb-5' src='Media/images/homeHero.png' alt='HeroImage' style={{ width: "80vw", marginLeft: "50px", }} />
                <h1 className='mt-3 '>Invest In EveryThing</h1>
                <p>Online Platform To Invest In Stocks, Derivatives, Mutual Funds, And More</p>
                <button className='p-2 btn btn-primary fs-5' style={{ width: "15%", margin: "0 auto", borderRadius: "10px" }}>SignUp Now</button>
            </div>
        </div>
    );
}

export default Hero;