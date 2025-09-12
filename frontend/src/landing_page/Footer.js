import React from 'react';


function Footer() {
    return (
        <footer className='border-top' style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container mt-5 '>
            <div className='row mt-5'>
                <div className='col'>
                    <div><b style={{ fontSize: "28px", cursor: "pointer", marginLeft: "35px" }}>Fizzy Trade</b></div>
                    <p className='text-muted' style={{fontSize:"14px",marginLeft:"35px",marginTop:"10px"}}>© 2025, Fizzy Trade Broking Ltd. <br></br>All rights reserved.</p>
                </div>
                 <div className='col'>
                    <p className='text-muted' style={{fontSize:"20px",fontWeight:"500"}}>Account</p>
                    <a className="text-muted"  href=''> Open demat account        </a> <br></br>
                    <a className="text-muted" href=''> Minor demat account</a> <br></br>
                    <a className="text-muted" href=''> NRI demat account</a> <br></br>
                    <a className="text-muted" href=''> Commodity</a> <br></br>
                    <a className="text-muted" href=''> Dematerialisation (CSR)</a> <br></br>
                    <a className="text-muted" href=''> Fund transfer</a> <br></br>
                    <a className="text-muted" href=''> MTF</a> <br></br>

                </div>
                <div className='col'>
                    <p className='text-muted' style={{fontSize:"20px",fontWeight:"500"}}>Company</p>
                    <a className="text-muted" href=''> About        </a> <br></br>
                    <a className="text-muted" href=''> Philosophy</a> <br></br>
                    <a className="text-muted" href=''> Press & media</a> <br></br>
                    <a className="text-muted" href=''> Careers</a> <br></br>
                    <a className="text-muted" href=''> Fizzy Trade Cares (CSR)</a> <br></br>
                    <a className="text-muted" href=''> FizzyTrade.tech</a> <br></br>
                    <a className="text-muted" href=''> Open source</a> <br></br>
                </div>
                <div className='col a-link'>
                    <p className='text-muted' style={{fontSize:"20px",fontWeight:"500"}}>Support</p>
                    <a className="text-muted" href=''> Contact us        </a> <br></br>
                    <a className="text-muted" href=''> Support portal</a> <br></br>
                    <a className="text-muted" href=''> How to file a complaint?</a> <br></br>
                    <a className="text-muted" href=''> Bulletin</a> <br></br>
                    <a className="text-muted" href=''> Circular (CSR)</a> <br></br>
                    <a className="text-muted" href=''> Downloads</a> <br></br>
                    <a className="text-muted" href=''> Z-Connect blog</a> <br></br>

                </div>
               
            </div>
            <p className='text-muted' style={{marginTop:"50px" , fontSize:"13px"}}>Fizzy Trade Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Fizzy Trade Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Fizzy Trade Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Fizzy Trade Broking Ltd. 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@FizzyTrade.com, for DP related to dp@zerFizzyTrade.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p className='text-muted' style={{ fontSize:"13px"}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p className='text-muted' style={{ fontSize:"13px"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p className='text-muted' style={{ fontSize:"13px"}}>Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p className='text-muted' style={{fontSize:"13px"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Fizzy Trade and offering such services, please create a ticket here.</p>
        </div>

        <div className='bottom-link'>
            <a className='text-muted' href=''>NSE</a>
            <a className='text-muted' href=''>BSE</a>
            <a className='text-muted' href=''>MCX</a>
            <a className='text-muted' href=''>Terms & conditions </a>
            <a className='text-muted' href=''>Policies & procedures </a>
            <a className='text-muted' href=''>Privacy policy </a>
            <a className='text-muted' href=''>Disclosure </a>
            <a className='text-muted' href=''>For investor's attention </a>
            <a className='text-muted' href=''>Investor charter</a>

        </div>
        </footer>
    );
}

export default Footer;