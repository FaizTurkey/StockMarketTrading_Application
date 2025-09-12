import React from 'react';

function Hero() {
    return (
        <div className='container text-center'>
                <h2 style={{marginTop:"90px"}} className='mb-4 text-muted'> Fizzy Trade Products</h2>
                <p style={{fontSize:"22px"}} className='mb-4 '>Sleek, modern, and intuitive trading platforms</p>
                <p style={{fontSize:"18px"}}>Check out our <a style={{textDecoration:"none"}} href=''>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
        </div>
      );
}

export default Hero;