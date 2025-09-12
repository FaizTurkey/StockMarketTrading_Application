import React from 'react';

function Universe() {
    return (
        <>
            <div className='text-center mt-5'>
                <h2 className='mb-4 text-muted'>The Fizzy Trade Universe</h2>
                <p style={{ fontSize: "16px" }}>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='container'>
                <div className='row mt-5 mb-5'>
                    <div className='col-4'>
                        <img style={{ width: "50%", marginLeft: "50px", marginBottom: "18px" }} src='Media\Images\sensibullLogo.svg' alt='main-img' /> <br></br>
                        <div className='text-muted' style={{ width: "80%", fontSize: "13px", fontWeight: "500" }}>
                            &nbsp; &nbsp; &nbsp; Option Trading Platform that let you <br></br>
                            create strategies, analyze position, and examine<br></br>
                            data points like open interest, FII/DII, and more
                        </div>

                        <img style={{ width: "50%", marginLeft: "40px", marginBottom: "18px", marginTop: "70px" }} src='Media\Images\streakLogo.png' alt='main-img' /> <br></br>
                        <div className='text-muted' style={{ width: "80%", fontSize: "13px", fontWeight: "500" }}>
                            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Systematic trading platform <br></br>
                            &nbsp; &nbsp;that allow you to create and backtest<br></br>
                            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;strategies without Coding
                        </div>
                    </div>
                    <div className='col-4'>
                        <img style={{ width: "50%", marginLeft: "35px", marginBottom: "18px" ,marginTop:"-13px"}} src='Media\Images\smallcaseLogo.png' alt='main-img' /> <br></br>
                        <div className='text-muted' style={{ width: "80%", fontSize: "13px", fontWeight: "500" }}>
                            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Thematic investing platform <br></br>
                            &nbsp; &nbsp;&nbsp;that help you invest in diversified<br></br>
                           &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;baskets of stocks on ETFs
                        </div>

                        <img style={{ width: "45%", marginLeft: "40px", marginBottom: "18px", marginTop: "60px" }} src='Media\Images\dittoLogo.png' alt='main-img' /> <br></br>
                        <div className='text-muted' style={{ width: "80%", fontSize: "13px", fontWeight: "500" }}>
                            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Personalized advice on life<br></br>
                            &nbsp; &nbsp; &nbsp; &nbsp;and health insurance. No spam<br></br>
                            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;and no mis-selling
                        </div>
                    </div>
                    <div className='col-4'>
                        <img style={{ width: "50%", marginLeft: "50px", marginBottom: "18px" }} src='Media\Images\sensibullLogo.svg' alt='main-img' /> <br></br>
                        <div className='text-muted' style={{ width: "80%", fontSize: "13px", fontWeight: "500" }}>
                            &nbsp; &nbsp; &nbsp; Option Trading Platform that let you <br></br>
                            create strategies, analyze position, and examine<br></br>
                            data points like open interest, FII/DII, and more
                        </div>

                        <img style={{ width: "50%", marginLeft: "40px", marginBottom: "18px", marginTop: "70px" }} src='Media\Images\streakLogo.png' alt='main-img' /> <br></br>
                        <div className='text-muted' style={{ width: "80%", fontSize: "13px", fontWeight: "500" }}>
                            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Systematic trading platform <br></br>
                            &nbsp; &nbsp;that allow you to create and backtest<br></br>
                            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;strategies without Coding
                        </div>
                    </div>
                    
                </div>
                 <button style={{fontWeight:"500", paddingRight:"35px" , paddingLeft:"35px" , marginLeft:"400px"}} className='btn btn-primary fs-5 mt-4 mb-5'>SignUp For Free</button>
            </div>
            
        </>
    );
}

export default Universe;