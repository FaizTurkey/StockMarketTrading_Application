import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img className='mb-5' src='Media/images/largestBroker.svg' style={{ width: "80%", marginTop: "38px" }} />
                </div>
                <div className='col-6'>
                    <h1 className='mt-5'>Stock Broker Of India</h1>
                    <p>200k+ Clients Contribute To Over 15% Of All Retail Order Volumes  In India Daily By Trading And Investing In: </p>
                    <div className='row'>
                        <div className='col-6 pb-3'>
                            <ul className='mt-4'>
                                <li>
                                    <p>Future And Options</p>
                                </li>
                                <li>
                                    <p>Commodity Derivatives</p>
                                </li>
                                <li>
                                    <p>Currency Derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='mt-4'>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct Mutual Funds</p>
                                </li>
                                <li>
                                    <p>Bonds And Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <img className='mb-5' src='Media\Images\pressLogos.png' style={{ width: "90%" }} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Awards;