import React from 'react';


function Pricing() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-8'>Unbeatable pricing</h1>
                    <p className='mt-4 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration: "none"}} href=''>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-3'>
                    <div className='row text-center' >
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>&#8377;0</h1>
                            <p className='text-muted'>Free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>&#8377;20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;