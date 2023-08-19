import React from 'react'
import { Link } from "react-router-dom";

    const Nav = () => {
        return(
            <>
               <nav class="navbar fixed-top  navbar bg-primary" style={{backgroundColor: "#e3f2fd"}}>
                <div class="container-fluid">
                    <Link to="/" style={{color:"#fff", fontSize:"18px",textDecoration:"none"}}>
                    <i class="bi bi-menu-button-wide-fill"></i> Клиенты
                    </Link>
                </div>
                </nav>
            </>
        )
    }

export default Nav;