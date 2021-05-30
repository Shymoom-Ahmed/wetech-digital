import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import '../css/header.css'

const HeaderMain = () =>{
    return(
        <div>
            <Navbar dark color="primary" className="primary" id="prim">
                <div className="container" id="cont">
                    <NavbarBrand href="/" id="navbar1">
                        <img className="logo" src={'./assets/logos/wetechdigital.png'}></img>
                    </NavbarBrand>
                    
                    <button type="button" id="contactBtn" class="btn btn-outline-secondary"><ContactPhoneIcon/>  Contact Us</button>
                    
                </div>
 
            </Navbar>
            
        </div>
    );
}
export default HeaderMain;