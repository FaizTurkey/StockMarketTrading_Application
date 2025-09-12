import React from 'react';

function Signup() {
    return (
        <>
            <h2 className='text-center mt-5 fs-3'>Open a free demat and trading account online</h2>
            <p className='text-center text-muted mt-3 fs-4 mb-5'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>

            <div className='.container mt-5'>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <img src='\Media\Images\signup.png' />
                    </div>

                    {/* <div className='col-2'></div> */}
                    <div className='col-6'>
                        <h4>Signup now</h4>
                        <p>Or track your existing application</p>
                        <div><div class="input-group flex-nowrap">
                            <span style={{width:"50px"}} class="input-group-text" id="addon-wrapping">+91</span>
                            <input style={{marginRight:"100px"}} type="text" class="form-control" placeholder="Enter Your Mobile Number" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;