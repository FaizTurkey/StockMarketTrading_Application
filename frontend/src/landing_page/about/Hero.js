import React from 'react';

function Hero() {
    return (
        <>
            <div style={{ fontWeight: "600", paddingBottom: "80px" }} className='text-center mt-5 text-muted fs-4 mb-8 ' >
                We pioneered the discount broking model in India.<br></br>
                Now, we are breaking ground with our technology.
            </div>
            <div className='container mb-5 border-top'>
                <div style={{ marginLeft: "120px", fontSize: "16px", fontWeight: "450", lineHeight: "28px", paddingTop: "103px" }} className='row mt-6 text-muted mb-5'>
                    <div className='col-5'>
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Fizzy Trade, </p>
                        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div className='col-6'>
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p> <a style={{textDecoration:"none"}} href=''>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a style={{textDecoration:"none"}} href=''> blog</a> or see what the media is <a style={{textDecoration:"none"}} href=''>saying about us</a> or learn more about our business and product <a style={{textDecoration:"none"}} href=''>philosophies</a>.</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Hero;