import React from 'react';

function Brokrage() {
    return ( 
        <>
        <div className='container'>
            <div className='row mb-5 pb-5 border-top'>
                <div className='col-4'>
                    <img src='Media\Images\pricing0.svg' alt='price-img'/>
                    <h2 className='text-center'>Free equity delivery</h2>
                    <p className='text-center text-muted'>All equity delivery investments (NSE, BSE),<br></br> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='Media\Images\intradayTrades.svg' alt='price-img'/>
                    <h2 className='text-center'>Intraday and F&O trades</h2>
                    <p className='text-center text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per <br></br> executed order on intraday trades across <br></br> equity, currency, and commodity trades. Flat <br></br>₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src='Media\Images\pricing0.svg' alt='price-img'/>
                    <h2 className='text-center'>Free direct MF</h2>
                    <p className='text-center text-muted'>All direct mutual fund investments are <br></br> absolutely free — ₹ 0 commissions & DP <br></br> charges.</p>
                </div>
            </div>
        </div>
        
        </>
     );
}

export default Brokrage;