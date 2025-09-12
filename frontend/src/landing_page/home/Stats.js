import React from 'react';
import "./Stats.css";

function Stats() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <div className='row'>
                        <div className='col-11 mb-5'>
                            <h4>Customer-first always</h4>
                            <p className='mb-4 text-muted' >That's why 1.6+ crore customers trust Fizzy Trade with ~ ₹6 lakh crores of equity investments</p>
                            <h4>No spam or gimmicks</h4>
                            <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                            <h4>The Fizzy Trade universe</h4>
                            <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
                            <h4>Do better with money</h4>
                            <p className='mb-4 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <img style={{width : "90%"}} src='Media\Images\ecosystem.png' />
                    <div className='route'>
                        <a href=''>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href=''>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Stats;