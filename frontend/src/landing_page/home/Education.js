import React from 'react';

function Education() {
    return (
         <div className='container'>
            <div className='row'>
                <div className='col-4 mb-5'>
                    <img className='mb-5' src='Media\Images\education.svg'/>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-3'>
                    <div className='row' >
                        <div className='col mt-5'>
                            <h1 className='text-muted' style={{fontSize:"30px"}}>Free and open market education</h1>
                            <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                             <a className='mb-4' style={{textDecoration: "none"}} href=''>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                             <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                             <a style={{textDecoration: "none"}} href=''>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Education;