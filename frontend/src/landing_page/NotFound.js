import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container text-center'>
                <h2 className='text-muted mb-4 mt-5'>404 Not Found</h2>
                <p className='text-muted mb-4'>Sorry,the Page You Looking For does not exist.</p>
                <Link style={{fontWeight:"500", paddingRight:"35px" , paddingLeft:"35px"}} className='btn btn-primary fs-5 mt-4 mb-5' to="/">Go Home</Link>
        </div>
     );
}

export default NotFound;