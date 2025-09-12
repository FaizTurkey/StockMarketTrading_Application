import React from 'react';

function LeftSection() {
    return (
        <>
            <div className='container mt-5 border-top'>
                <div className='row mt-5'>
                    <div className='col-8'>
                        <img src='Media\Images\kite.png' alt='main-img' />
                    </div>
                    <div className='col-4 mt-5'>
                        <h2>Kite</h2>
                        <div className='mt-4' style={{ fontSize: "18px", fontWeight: "400", lineHeight: "30px" }}>
                            Our ultra-fast flagship trading platform with <br></br> streaming market data, advanced charts, an <br></br> elegant UI, and more. Enjoy the Kite <br></br> experience seamlessly on your Android and <br></br> iOS devices.
                        </div>
                        <div className='mt-3' >
                            <a style={{ marginRight: "60px", fontSize: "18px", textDecoration: "none", fontWeight: "500" }} href=''>Try Demo <i class="fa-solid fa-arrow-right,"></i></a>
                            <a style={{ fontSize: "18px", textDecoration: "none", fontWeight: "500" }} href=''>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                        </div>

                        <div className='mt-4' >
                            <img style={{ marginRight: "20px" }} src='Media\Images\googlePlayBadge.svg' />
                            <img src='Media\Images\appstoreBadge.svg' />
                        </div>
                    </div>
                </div>


                <div className='row mt-5'>

                    <div className='col-4 mt-5'>
                        <h2 className='text-muted' style={{ marginTop: "190px", fontSize: "28px" }}>Console</h2>
                        <div className='mt-4' style={{ fontSize: "18px", fontWeight: "400", lineHeight: "30px" }}>
                            The central dashboard for your Fizzy Trade <br></br> account. Gain insights into your trades and <br></br> investments with in-depth reports and <br></br> visualisations.
                        </div>
                        <div className='mt-3' >
                            <a style={{ fontSize: "18px", textDecoration: "none", fontWeight: "500" }} href=''>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className='col-8'>
                        <img style={{ marginLeft: "70px" }} src='Media\Images\console.png' alt='main-img' />
                    </div>
                </div>


                <div className='row mt-5'>
                    <div className='col-8'>
                        <img src='Media\Images\coin.png' alt='main-img' />
                    </div>
                    <div className='col-4 mt-5'>
                        <h2>Coin</h2>
                        <div className='mt-4' style={{ fontSize: "18px", fontWeight: "400", lineHeight: "30px" }}>
                           Buy direct mutual funds online, commission- <br></br>free, delivered directly to your Demat <br></br> account. Enjoy the investment experience <br></br> on your Android and iOS devices.
                        </div>
                        <div className='mt-3' >
                            <a style={{ marginRight: "60px", fontSize: "18px", textDecoration: "none", fontWeight: "500" }} href=''>Coin <i class="fa-solid fa-arrow-right-long"></i></a>
                           
                        </div>

                        <div className='mt-4' >
                            <img style={{ marginRight: "20px" }} src='Media\Images\googlePlayBadge.svg' />
                            <img src='Media\Images\appstoreBadge.svg' />
                        </div>
                    </div>
                </div>

                 <div className='row mt-5'>

                    <div className='col-4 mt-5'>
                        <h2 className='text-muted' style={{ marginTop: "25px", fontSize: "28px" }}>Kite Connect API</h2>
                        <div className='mt-4' style={{ fontSize: "18px", fontWeight: "400", lineHeight: "30px" }}>
                           Build powerful trading platforms and <br></br>experiences with our super simple <br></br> HTTP/JSON APIs. If you are a startup, build <br></br> your investment app and showcase it to our <br></br> clientbase.
                        </div>
                        <div className='mt-3' >
                            <a style={{ fontSize: "18px", textDecoration: "none", fontWeight: "500" }} href=''>Kite Connect<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className='col-8'>
                        <img style={{ marginLeft: "150px" }} src='Media\Images\kiteconnect.png' alt='main-img' />
                    </div>
                </div>


                <div className='row mt-5'>
                    <div className='col-8'>
                        <img src='Media\Images\varsity.png' alt='main-img' />
                    </div>
                    <div className='col-4 mt-5'>
                        <h2 className='text-muted' style={{marginTop:"50px",fontSize:"23px"}}>Varsity mobile</h2>
                        <div className='mt-4' style={{ fontSize: "18px", fontWeight: "400", lineHeight: "30px" }}>
                          An easy to grasp, collection of stock market <br></br> lessons with in-depth coverage and <br></br>illustrations. Content is broken down into <br></br> bite-size cards to help you learn on the go.
                        </div>

                        <div className='mt-4' >
                            <img style={{ marginRight: "20px" }} src='Media\Images\googlePlayBadge.svg' />
                            <img src='Media\Images\appstoreBadge.svg' />
                        </div>
                    </div>
                </div>


            </div>

            <p style={{marginTop:"80px",fontSize:"23px",marginBottom:"80px"}} className='text-center'>Want to know more about our technology stack? Check out the <a style={{textDecoration:"none",fontWeight:"500"}} href=''>Fizzytrade.tech</a> blog.</p>



        </>
    );
}

export default LeftSection;