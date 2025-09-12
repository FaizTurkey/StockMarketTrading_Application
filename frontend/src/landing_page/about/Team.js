import React from 'react';

function Team() {
    return ( 
        <>
            <div className='container mb-5'>
                <h2 className='text-center mt-5 text-muted'>People</h2>
                <div style={{ marginLeft: "120px", fontSize: "16px", fontWeight: "450", lineHeight: "28px", paddingTop: "103px" }} className='row mt-6 text-muted mb-5'>
                    
                    <div className='col-5'>
                         <img style={{width:"60%"}} src='Media\Images\myphoto.png (2).jpeg' alt='main-photo'/>
                         <p style={{marginLeft:"50px",marginTop:"23px",fontSize:"20px"}}>Mohammad Faiz</p>
                         <p style={{marginLeft:"70px",marginTop:"13px"}}>Founder, CEO</p>
                    </div>
                    <div className='col-5'>
                        <p> <b>Mohammad Faiz</b> founded Fizzy Trade in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, <b>Fizzy Trade</b> has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing Cricket is his zen.</p>
                        <p>Connect On <a style={{textDecoration:"none"}} href='www.linkedin.com/in/mohdfaiz12'>LinkedIn</a></p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Team;