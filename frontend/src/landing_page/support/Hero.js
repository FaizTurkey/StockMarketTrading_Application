import React from 'react';

function Hero() {
    return (
        <>
            <div className='ticket'>
                <h2 style={{ marginLeft: "40px" }}>Support Portal</h2>
                <button style={{ marginRight: "40px", paddingRight: "30px", paddingLeft: "30px", fontWeight: "500" }} className='btn btn-primary'> My Ticket</button>
            </div>
            <div class="input-group mt-4 mb-5 pb-5">
                <span style={{ marginLeft: "30px" }} class="input-group-text" id="visible-addon"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input style={{ marginRight: "30px", height: "50px" }} type="text" class="form-control" placeholder="Eg: How do i Open my account,How do i activate F&O" aria-label="Username" aria-describedby="visible-addon" />
                <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon" />
            </div>

        </>
    );
}

export default Hero;