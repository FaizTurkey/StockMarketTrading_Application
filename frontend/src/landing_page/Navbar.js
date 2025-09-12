import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-white border-bottom">
            <div class="container-fluid p-1">
                <Link className='navbar-brand' to="/">
                    <span style={{ textDecoration: "none", fontSize: "28px", marginLeft: "35px", fontWeight: "bold" }}>Fizzy Trade</span>
                </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul style={{ marginLeft: "500px" }} class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-muted " aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-muted" to="/about">About</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link active text-muted" to="/product">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-muted" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-muted" to="/support">Support</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;